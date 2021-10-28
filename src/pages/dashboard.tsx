import { useEffect } from 'react'
import Router from 'next/router'
import { useAuth } from 'lib/auth'

export const Dashboard = () => {
  const auth = useAuth()
  useEffect(() => {
    if (auth?.user) {
      if (auth?.userData?.password !== '') {
        Router.push('/onboard')
      }
    } else {
      Router.push('/')
    }
  }, [auth])
  return <></>
}
