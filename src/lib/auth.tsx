import React, { useState, useEffect, useContext, useMemo } from 'react'
import Router, { useRouter } from 'next/router'

import {
  getAuth,
  User,
  FacebookAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  onIdTokenChanged,
} from 'firebase/auth'
import { onSnapshot } from 'firebase/firestore'
import firebaseApp from './firebase'
import { createUser, getUserRef } from './db'
import { Loading } from 'components/Loading'

export interface IUserData extends IInitialUserData {
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
  user: User | null
  userData: IUserData | null
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
  const { pathname } = useRouter()

  const checkOnboard = useMemo(() => {
    let status = false
    if (pathname === '/onboard') {
      status = true
    }
    if (auth?.userData?.password === '') {
      status = false
    }
    if (auth.user !== null) {
      status = false
    }
    return status
  }, [pathname, auth])

  const checkDashboard = useMemo(() => {
    let status = false
    if (pathname === '/dashboard') {
      status = true
    }
    if (auth?.userData?.password !== '') {
      status = false
    }
    if (auth.user !== null) {
      status = false
    }
    return status
  }, [pathname, auth])

  useEffect(() => {
    if (pathname === '/onboard') {
      if (auth.user === null) {
        Router.push('/')
      } else if (auth?.userData?.password !== '') {
        Router.push('/dashboard')
      }
    }
    if (pathname === '/dashboard') {
      if (auth.user === null) {
        Router.push('/')
      } else if (auth?.userData?.password === '') {
        Router.push('/onboard')
      }
    }
  }, [pathname, auth])

  if (auth.loading || checkOnboard || checkDashboard) {
    return <Loading />
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [userData, setUserData] = useState<IUserData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user?.uid) {
      const userRef = getUserRef(user.uid)
      const unsubscribe = onSnapshot(userRef, (doc) => {
        setUserData((data) => {
          if (data) {
            setLoading(false)
            return { ...data, ...doc.data() }
          } else return null
        })
      })

      return () => {
        setUserData(null)
        unsubscribe()
      }
    }
  }, [user?.uid])

  const handleUser = async (rawUser: User | null) => {
    if (rawUser) {
      const user = formatUser(rawUser)
      await createUser(user.uid, user)
      setUserData({
        ...user,
        username: '',
        password: '',
        anonymous: true,
      })
      setUser(rawUser)
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

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, handleUser)

    return () => unsubscribe()
  }, [])

  return {
    user,
    userData,
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
