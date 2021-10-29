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
import { createUser, getUserRef, getCurrentUserData } from './db'
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

export interface IAuthContext {
  user: User | null
  userData: IUserData | null
  loading: boolean
  setLoading: (loading: boolean) => void
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
    if (pathname === '/onboard' && auth.user === null) {
      status = true
    }
    if ((pathname === '/onboard') !== (auth?.userData?.password === '')) {
      status = true
    }

    return status
  }, [pathname, auth])

  const checkDashboard = useMemo(() => {
    let status = false
    if (pathname === '/dashboard' && auth.user === null) {
      status = true
    }
    if (pathname === '/dashboard' && auth?.userData?.password === '') {
      status = true
    }
    return status
  }, [pathname, auth])

  useEffect(() => {
    if (auth.loading === false) {
      if (pathname === '/onboard') {
        if (auth?.user === null) {
          Router.push('/')
        } else if (auth?.userData?.password !== '') {
          Router.push('/dashboard')
        }
      } else if (auth?.user && auth?.userData?.password === '') {
        console.log('====> ', auth?.userData?.password)
        Router.push('/onboard')
      } else if (auth.user === null) {
        if (pathname === '/dashboard' || pathname === '/onboard') {
          Router.push('/')
        }
      } else {
        if (pathname === '/login' || pathname === '/register') {
          Router.push('/')
        }
      }
    }
  }, [pathname, auth])

  console.log(auth.loading, auth?.userData)

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
    if (rawUser && user === null) {
      const user = formatUser(rawUser)
      await createUser(user.uid, user)

      setUser(rawUser)
      const tmpData: any = await getCurrentUserData(user.uid)
      console.log(user.uid)
      console.log('->', tmpData)
      setUserData({
        username: '',
        password: '',
        anonymous: true,
        ...tmpData,
      })
      setLoading(false)
    } else if (rawUser === null) {
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
    setLoading,
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
