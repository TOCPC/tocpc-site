import bcrypt from 'bcryptjs'
import Router from 'next/router'
import { updateUser } from 'lib/db'
import { IAuthContext } from 'lib/auth'

export const submitRegister = (
  data: any,
  auth: IAuthContext | null,
  anonymous: boolean
) => {
  data = { ...data, anonymous, username: '' }
  bcrypt.hash(data.password, 12, async (err, encrypted) => {
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
