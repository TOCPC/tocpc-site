import bcrypt from 'bcryptjs'
import Router from 'next/router'
import { updateUser } from 'lib/db'
import { IAuthContext } from 'lib/auth'

export const submitRegisterNormal = (data: any, auth: IAuthContext | null) => {
  data = { ...data, anonymous: false }
  bcrypt.hash(data.password, 10, async (err, encrypted) => {
    data = { ...data, password: encrypted }
    delete data.verify
    if (auth?.userData?.uid) {
      auth?.setLoading(true)
      await updateUser(auth?.userData?.uid, data)
      Router.push('/dashboard')
      auth?.setLoading(false)
    }
  })
}

export const submitRegisterAnonymous = (
  data: any,
  auth: IAuthContext | null
) => {
  data = { ...data, anonymous: true }
  bcrypt.hash(data.password, 10, async (err, encrypted) => {
    data = { ...data, password: encrypted }
    delete data.verify
    if (auth?.userData?.uid) {
      auth?.setLoading(true)
      await updateUser(auth?.userData?.uid, data)
      Router.push('/dashboard')
      auth?.setLoading(false)
    }
  })
}
