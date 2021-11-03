import { Formik, Field, Form } from 'formik'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import classnames from 'classnames'
import { useAuth, IAuthContext } from 'lib/auth'
import { submitRegister } from 'lib/process'

const validate = (values: any) => {
  const errors: any = {}
  if (!values.firstname) {
    errors.firstname = 'จำเป็นต้องใส่'
  } else if (values.firstname.length > 32) {
    errors.firstname = 'ความยาวต้องไม่เกิน 32 ตัวอักษร'
  }

  if (!values.lastname) {
    errors.lastname = 'จำเป็นต้องใส่'
  } else if (values.lastname.length > 32) {
    errors.lastname = 'ความยาวต้องไม่เกิน 32 ตัวอักษร'
  }

  if (!values.password) {
    errors.password = 'จำเป็นต้องใส่'
  } else if (values.password.length < 8 || values.password.length > 32) {
    errors.password = 'ความยาวต้องอยู่ระหว่าง 8 ถึง 32 ตัวอักษร'
  }

  if (!values.verify) {
    errors.verify = 'จำเป็นต้องใส่'
  } else if (values.password !== values.verify) {
    errors.verify = 'รหัสผ่านไม่ตรงกับยืนยันรหัสผ่าน'
  }

  if (!values.tel) {
    errors.tel = 'จำเป็นต้องใส่'
  } else if (values.tel.length > 16) {
    errors.tel = 'ความยาวต้องไม่เกิน 16 ตัวอักษร'
  }

  if (!values.address) {
    errors.address = 'จำเป็นต้องใส่'
  } else if (values.tel.length > 256) {
    errors.address = 'ความยาวต้องไม่เกิน 256 ตัวอักษร'
  }

  if (!values.size) {
    errors.size = 'จำเป็นต้องใส่'
  }

  return errors
}

const validatePassword = (values: any) => {
  const errors: any = {}

  if (!values.password) {
    errors.password = 'จำเป็นต้องใส่'
  } else if (values.password.length < 8 || values.password.length > 32) {
    errors.password = 'ความยาวต้องอยู่ระหว่าง 8 ถึง 32 ตัวอักษร'
  }

  if (!values.verify) {
    errors.verify = 'จำเป็นต้องใส่'
  } else if (values.password !== values.verify) {
    errors.verify = 'รหัสผ่านไม่ตรงกับยืนยันรหัสผ่าน'
  }

  return errors
}

const Normal = ({ auth }: { auth: IAuthContext | null }) => (
  <Formik
    initialValues={{
      firstname: '',
      lastname: '',
      password: '',
      verify: '',
      tel: '',
      address: '',
      size: '',
    }}
    validate={validate}
    onSubmit={(data) => {
      submitRegister(data, auth, false)
    }}
    validateOnChange={false}
    validateOnBlur={false}
  >
    {({ errors }) => (
      <Form className="py-4 text-sm text-white font-display">
        <label className="block my-1" htmlFor="firstname">
          ชื่อ (ภาษาไทย ไม่ต้องมีคำนำหน้า)
        </label>
        <Field
          className={classnames(
            'border block w-full bg-black p-3 focus:outline-none rounded-md',
            errors.firstname ? 'border-red-400' : 'border-black'
          )}
          id="firstname"
          name="firstname"
          placeholder="(ภาษาไทย ไม่ต้องมีคำนำหน้า)"
        />
        {errors.firstname ? (
          <p className="mt-1 text-red-400">{errors.firstname}</p>
        ) : (
          <div className="h-6" aria-hidden></div>
        )}
        <label className="block my-1" htmlFor="lastname">
          นามสกุล (ภาษาไทย)
        </label>
        <Field
          className={classnames(
            'border block w-full bg-black p-3 focus:outline-none rounded-md',
            errors.lastname ? 'border-red-400' : 'border-black'
          )}
          id="lastname"
          name="lastname"
          placeholder="นามสกุล (ภาษาไทย)"
        />
        {errors.lastname ? (
          <p className="mt-1 text-red-400">{errors.lastname}</p>
        ) : (
          <div className="h-6" aria-hidden></div>
        )}
        <label className="block my-1 font-display" htmlFor="password">
          ตั้งรหัสผ่าน CMS
        </label>
        <Field
          className={classnames(
            'border block w-full bg-black p-3 focus:outline-none rounded-md',
            errors.password ? 'border-red-400' : 'border-black'
          )}
          id="password"
          name="password"
          placeholder="ความยาวระหว่าง 8-32 ตัวอักษร"
          type="password"
        />
        {errors.password ? (
          <p className="mt-1 text-red-400">{errors.password}</p>
        ) : (
          <div className="h-6" aria-hidden></div>
        )}
        <label className="block my-1 font-display" htmlFor="verify">
          ยืนยันรหัสผ่าน
        </label>
        <Field
          className={classnames(
            'border block w-full bg-black p-3 focus:outline-none rounded-md',
            errors.verify ? 'border-red-400' : 'border-black'
          )}
          id="verify"
          name="verify"
          placeholder="ยืนยันรหัสผ่าน"
          type="password"
        />
        {errors.verify ? (
          <p className="mt-1 text-red-400">{errors.verify}</p>
        ) : (
          <div className="h-6" aria-hidden></div>
        )}
        <label className="block my-1 font-display" htmlFor="tel">
          เบอร์โทรศัพท์สำหรับติดต่อ
        </label>
        <Field
          className={classnames(
            'border block w-full bg-black p-3 focus:outline-none rounded-md',
            errors.tel ? 'border-red-400' : 'border-black'
          )}
          id="tel"
          name="tel"
          placeholder="เบอร์โทรศัพท์สำหรับติดต่อ"
          type="tel"
        />
        {errors.tel ? (
          <p className="mt-1 text-red-400">{errors.tel}</p>
        ) : (
          <div className="h-6" aria-hidden></div>
        )}
        <label className="block my-1 font-display" htmlFor="address">
          ที่อยู่สำหรับส่งของรางวัล
        </label>
        <Field
          className={classnames(
            'border block w-full bg-black p-3 focus:outline-none rounded-md',
            errors.address ? 'border-red-400' : 'border-black'
          )}
          id="address"
          name="address"
          placeholder="ที่อยู่สำหรับส่งของรางวัล 50 ตัวอักษร"
          type="address"
        />
        {errors.address ? (
          <p className="mt-1 text-red-400">{errors.address}</p>
        ) : (
          <div className="h-6" aria-hidden></div>
        )}
        <p className="w-full mb-4 font-display">ขนาดเสื้อ</p>
        <div role="group" aria-labelledby="my-radio-group">
          <label className="flex items-center my-1 font-display">
            <Field
              className="inline mr-3 text-black font-display focus:outline-none unc"
              name="size"
              type="radio"
              value="S"
            />
            S (รอบอก XX ความยาวตัว XX)
          </label>
          <label className="flex items-center my-1 font-display">
            <Field
              className="inline mr-3 text-black font-display focus:outline-none unc"
              name="size"
              type="radio"
              value="M"
            />
            M (รอบอก XX ความยาวตัว XX)
          </label>
          <label className="flex items-center my-1 font-display">
            <Field
              className="inline mr-3 text-black font-display focus:outline-none unc"
              name="size"
              type="radio"
              value="L"
            />
            L (รอบอก XX ความยาวตัว XX)
          </label>
        </div>
        {errors.size ? (
          <p className="mt-1 text-red-400">{errors.size}</p>
        ) : (
          <div className="h-6" aria-hidden></div>
        )}
        <div className="py-6 border-t border-b">
          <p className="text-white font-display">
            โปรดตรวจสอบข้อมูลของท่านให้เรียบร้อยก่อนกดปุ่มลงทะเบียน
            เนื่องจากข้อมูลทั้งหมด
            <span className="text-red-400">
              {' ไม่สามารถแก้ไขได้อีกต่อไป '}
            </span>
            หลังจากกดปุ่มแล้ว
          </p>
          <p className="mt-6 text-white font-display">
            หากพบว่าข้อมูลที่ได้รับ ไม่ตรงกับความเป็นจริง
            หรือข้อมูลบางส่วนบกพร่อง
            ทางทีมงานมีสิทธิ์ในการยุติการลงทะเบียนของท่านได้
          </p>
        </div>
        <div className="py-6 text-white">
          <button
            className="w-full p-3 mb-3 bg-red-400 rounded-full"
            type="submit"
          >
            Sign up
          </button>
          <p className="mb-24 text-center font-display">
            การลงทะเบียนถือว่ายอมรับ
            <Link href="/">
              <a className="text-red-400 underline">
                ข้อตกลงและเงื่อนไขการแข่งขัน
              </a>
            </Link>
          </p>
        </div>
      </Form>
    )}
  </Formik>
)

const Anonymous = ({ auth }: { auth: IAuthContext | null }) => (
  <Formik
    initialValues={{
      password: '',
      verify: '',
    }}
    validate={validatePassword}
    onSubmit={(data) => {
      submitRegister(data, auth, true)
    }}
    validateOnChange={false}
    validateOnBlur={false}
  >
    {({ errors }) => (
      <Form className="py-4 text-sm text-white font-display">
        <label className="block my-1 font-display" htmlFor="password">
          ตั้งรหัสผ่าน CMS
        </label>
        <Field
          className={classnames(
            'border block w-full bg-black p-3 focus:outline-none rounded-md',
            errors.password ? 'border-red-400' : 'border-black'
          )}
          id="password"
          name="password"
          placeholder="ความยาวระหว่าง 8-32 ตัวอักษร"
          type="password"
        />
        {errors.password ? (
          <p className="mt-1 text-red-400">{errors.password}</p>
        ) : (
          <div className="h-6" aria-hidden></div>
        )}
        <label className="block my-1 font-display" htmlFor="verify">
          ยืนยันรหัสผ่าน
        </label>
        <Field
          className={classnames(
            'border block w-full bg-black p-3 focus:outline-none rounded-md',
            errors.verify ? 'border-red-400' : 'border-black'
          )}
          id="verify"
          name="verify"
          placeholder="ยืนยันรหัสผ่าน"
          type="password"
        />
        {errors.verify ? (
          <p className="mt-1 text-red-400">{errors.verify}</p>
        ) : (
          <div className="h-6" aria-hidden></div>
        )}
        <div className="py-6 border-t border-b">
          <p className="text-white font-display">
            โปรดตรวจสอบข้อมูลของท่านให้เรียบร้อยก่อนกดปุ่มลงทะเบียน
            เนื่องจากข้อมูลทั้งหมด
            <span className="text-red-400">
              {' ไม่สามารถแก้ไขได้อีกต่อไป '}
            </span>
            หลังจากกดปุ่มแล้ว
          </p>
        </div>
        <div className="py-6 text-white">
          <button
            className="w-full p-3 mb-3 bg-red-400 rounded-full"
            type="submit"
          >
            Sign up
          </button>
          <p className="mb-24 text-center font-display">
            การลงทะเบียนถือว่ายอมรับ
            <Link href="/tos">
              <a className="text-red-400 underline">
                ข้อตกลงและเงื่อนไขการแข่งขัน
              </a>
            </Link>
          </p>
        </div>
      </Form>
    )}
  </Formik>
)

const Register = () => {
  const auth = useAuth()
  const [anonymous, setAnonymous] = useState<boolean>(false)

  return (
    <main className="relative w-full min-h-screen bg-gray-900">
      <div className="absolute z-10 w-20 h-full transform translate-x-2 bg-red-400 right-full sm:translate-x-6 md:translate-x-12 lg:translate-x-16 xl:translate-x-20 lg:" />
      <div className="flex flex-col">
        <div className="flex flex-col items-center px-8 sm:px-40 mt-28 sm:mt-26">
          <p className="pt-8 text-3xl font-extrabold text-center text-white font-display">
            ลงทะเบียนแข่งขัน
          </p>
          <p className="text-center text-white font-display text-md">
            เข้าร่วมแบบ: {anonymous ? 'ไม่เปิดเผยตัวตน' : 'ทั่วไป'}
          </p>
          <div className="max-w-lg">
            <div className="grid grid-cols-2 gap-6 py-8 border-b">
              <div className={anonymous ? 'text-white' : 'text-red-400'}>
                <button
                  className={classnames(
                    'w-full border rounded-2xl my-4 p-2 sm:px-0',
                    anonymous
                      ? 'border-white border-2'
                      : 'border-red-400 border-2'
                  )}
                  onClick={() => setAnonymous(false)}
                  type="button"
                >
                  <div className="flex flex-col justify-center sm:flex-row">
                    <div className="m-2">
                      <svg
                        className="fill-current"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20 10.5C20 16.0228 15.5228 20.5 9.99998 20.5C4.47714 20.5 0 16.0228 0 10.5C0 4.97715 4.47714 0.5 9.99998 0.5C15.5228 0.5 20 4.97715 20 10.5ZM12.5 6.75C12.5 8.13071 11.3807 9.25 9.99998 9.25C8.61927 9.25 7.49998 8.13071 7.49998 6.75C7.49998 5.36929 8.61927 4.25 9.99998 4.25C11.3807 4.25 12.5 5.36929 12.5 6.75ZM9.99989 11.75C7.47797 11.75 5.30492 13.2437 4.31716 15.3946C5.69252 16.99 7.7283 18 9.99996 18C12.2716 18 14.3073 16.9901 15.6827 15.3947C14.6949 13.2437 12.5219 11.75 9.99989 11.75Z"
                        />
                      </svg>
                    </div>
                    <div className="mx-2 text-left">
                      <p className="text-xs font-display">เข้าร่วมแบบ</p>
                      <p className="font-bold font-display">ทั่วไป</p>
                    </div>
                  </div>
                </button>
                <p className="text-xs font-display">
                  เหมาะสำหรับบุคคลทั่วไปทุกเพศทุกวัยที่สะดวกเปิดเผยข้อมูลส่วนตัวและรับของรางวัลเราจะเก็บข้อมูลที่จำเป็นต่อการจัดส่งรางวัล
                  เช่น ชื่อ ที่อยู่ และข้อมูลสำคัญอื่น ๆ
                </p>
              </div>
              <div className={anonymous ? 'text-red-400' : 'text-white'}>
                <button
                  className={classnames(
                    'w-full border rounded-2xl my-4 p-2 sm:px-0',
                    anonymous
                      ? 'border-2 border-red-400'
                      : 'border-2 border-white'
                  )}
                  onClick={() => setAnonymous(true)}
                  type="button"
                >
                  <div className="flex flex-col justify-center sm:flex-row">
                    <div className="m-2">
                      <svg
                        className="fill-current"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20 10.5C20 16.0228 15.5228 20.5 10 20.5C4.47715 20.5 0 16.0228 0 10.5C0 4.97715 4.47715 0.5 10 0.5C15.5228 0.5 20 4.97715 20 10.5ZM10 6.75C9.53891 6.75 9.1345 6.99902 8.91648 7.37591C8.5708 7.97348 7.80614 8.17769 7.20857 7.83201C6.61099 7.48633 6.40679 6.72167 6.75247 6.12409C7.39897 5.00648 8.61041 4.25 10 4.25C12.0711 4.25 13.75 5.92893 13.75 8C13.75 9.63277 12.7065 11.0218 11.25 11.5366V11.75C11.25 12.4404 10.6904 13 10 13C9.30966 13 8.75002 12.4404 8.75002 11.75V10.5C8.75002 9.80964 9.30966 9.25 10 9.25C10.6904 9.25 11.25 8.69036 11.25 8C11.25 7.30964 10.6904 6.75 10 6.75ZM10 16.75C10.6904 16.75 11.25 16.1904 11.25 15.5C11.25 14.8096 10.6904 14.25 10 14.25C9.30964 14.25 8.75 14.8096 8.75 15.5C8.75 16.1904 9.30964 16.75 10 16.75Z"
                        />
                      </svg>
                    </div>
                    <div className="mx-2 text-left">
                      <p className="text-xs font-display">เข้าร่วมแบบ</p>
                      <p className="font-bold font-display">ไม่เปิดเผยตัวตน</p>
                    </div>
                  </div>
                </button>
                <p className="text-xs font-display">
                  เหมาะสำหรับผู้ที่ต้องการได้รับประสบการณ์การแข่งขันแต่ไม่สะดวกเปิดเผยข้อมูลส่วนตัวหรือไม่สะดวกรับของรางวัลโดยจะไม่มีการแสดงคะแนนต่อสาธารณะในระหว่างการแข่งรวมถึงไม่นำไปคิดคะแนนแข่งขัน
                  และไม่ได้รับของรางวัล
                </p>
              </div>
            </div>
            {anonymous ? <Anonymous auth={auth} /> : <Normal auth={auth} />}
          </div>
          <div className="flex flex-col w-full max-w-sm text-white"></div>
        </div>
      </div>
    </main>
  )
}

export default Register
