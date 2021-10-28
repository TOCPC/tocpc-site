import React, { useState, useEffect, useContext, useCallback } from 'react'
import Router from 'next/router'

import {
  getAuth,
  User,
  FacebookAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { onSnapshot } from 'firebase/firestore'
import firebaseApp from './firebase'
import { createUser, getUserRef } from './db'
import { Loading } from 'components/Loading'

interface UserData extends IInitialUserData {
  username: string
  password: string
  firstname?: string
  lastname?: string
  tel?: string
  address?: string
  postalcode?: string
  size?: string
  anonymous: boolean
}

interface IInitialUserData {
  uid: string
  email: string | null
  name: string | null
  provider: string
  photoUrl: string | null
}

const auth = getAuth(firebaseApp)

interface IAuthContext {
  user: UserData | null
  loading: boolean
  signinWithFacebook: (redirect: string) => Promise<void>
  signinWithGoogle: (redirect: string) => Promise<void>
  signinWithGitHub: (redirect: string) => Promise<void>
  signout: () => void
}

const AuthContext = React.createContext<IAuthContext | null>(null)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth()

  return <Loading />
  // if (auth.loading) {
  //   return <Loading />
  // }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

function useProvideAuth() {
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user?.uid) {
      const userRef = getUserRef(user.uid)
      const unsubscribe = onSnapshot(userRef, (doc) => {
        setUser({
          ...user,
          ...doc.data(),
        })
        setLoading(false)
      })
      return () => unsubscribe()
    }
  }, [user?.uid])

  const handleUser = async (rawUser: User | null) => {
    if (rawUser) {
      const user = formatUser(rawUser)
      await createUser(user.uid, user)
      const tempUser: UserData = {
        ...user,
        username: '',
        password: '',
        anonymous: true,
      }
      setUser(tempUser)
    } else {
      setUser(null)
      setLoading(false)
    }
  }

  const signinWithFacebook = async (redirect: string) => {
    setLoading(true)

    const response = await signInWithPopup(auth, new FacebookAuthProvider())

    handleUser(response.user)

    if (redirect) {
      Router.push(redirect)
    }
  }

  const signinWithGoogle = async (redirect: string) => {
    setLoading(true)

    const response = await signInWithPopup(auth, new GoogleAuthProvider())

    handleUser(response.user)

    if (redirect) {
      Router.push(redirect)
    }
  }

  const signinWithGitHub = async (redirect: string) => {
    setLoading(true)

    const response = await signInWithPopup(auth, new GithubAuthProvider())

    handleUser(response.user)

    if (redirect) {
      Router.push(redirect)
    }
  }

  const signout = async () => {
    Router.push('/')

    await signOut(auth)
    return await handleUser(null)
  }

  return {
    user,
    loading,
    signinWithFacebook,
    signinWithGoogle,
    signinWithGitHub,
    signout,
  }
}

const formatUser = (user: User): IInitialUserData => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  }
}
