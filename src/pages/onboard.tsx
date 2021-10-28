import { Formik, Field, Form } from 'formik'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import classnames from 'classnames'

const Normal = () => (
  <Formik
    initialValues={{
      firstname: '',
      lastname: '',
      password: '',
      verify: '',
      tel: '',
      address: '',
      postal: ''
    }}
    onSubmit={() => {

    }}
  >
    <Form className="font-display text-sm text-white">
      <label
        className="block my-1"
        htmlFor="firstName"
      >
        ชื่อ (ภาษาไทย ไม่ต้องมีคำนำหน้า)
      </label>
      <Field
        className="block w-full bg-black mb-6 p-3 focus:outline-none rounded-md"
        id="firstName"
        name="firstName"
        placeholder="(ภาษาไทย ไม่ต้องมีคำนำหน้า)"
      />
      <label
        className="block my-1"
        htmlFor="lastName"
      >
        นามสกุล (ภาษาไทย)
      </label>
      <Field
        className="block w-full bg-black mb-6 p-3 focus:outline-none rounded-md"
        id="lastName"
        name="lastName"
        placeholder="นามสกุล (ภาษาไทย)"
      />
    </Form>

  </Formik>
)

const Anonymous = () => (
  <>
  </>
)

const Register = () => {
  const [anonymous, setAnonymous] = useState<boolean>(false)

  return (
    <main className="relative w-full min-h-screen bg-gray-900">
      <div className="absolute right-full bg-red-400 w-20 h-full transform translate-x-2 sm:translate-x-10 md:translate-x-20 z-10" />
      <div className="flex flex-col">
        <div className="flex flex-col items-center px-8 sm:px-40 mt-28 sm:mt-26">
          <p className="font-display text-3xl text-center font-extrabold text-white pt-8">
            ลงทะเบียนแข่งขัน
          </p>
          <p className="font-display text-md  text-center text-white">
            เข้าร่วมแบบ: {anonymous ? 'ไม่เปิดเผยตัวตน' : 'ทั่วไป'}
          </p>
          <div className="max-w-sm">
            <div className="grid grid-cols-2 py-8 border-b gap-6">
              <div className={anonymous ? 'text-gray-600' : 'text-white'}>
                <button
                  className={classnames("w-full border rounded-2xl my-4 p-2 sm:px-0", anonymous ? "border-gray-600 border-1" : "border-white border-2")}
                  onClick={() => setAnonymous(false)}
                  type="button"
                >
                  <div className="flex flex-col sm:flex-row justify-center">
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20 10.5C20 16.0228 15.5228 20.5 9.99998 20.5C4.47714 20.5 0 16.0228 0 10.5C0 4.97715 4.47714 0.5 9.99998 0.5C15.5228 0.5 20 4.97715 20 10.5ZM12.5 6.75C12.5 8.13071 11.3807 9.25 9.99998 9.25C8.61927 9.25 7.49998 8.13071 7.49998 6.75C7.49998 5.36929 8.61927 4.25 9.99998 4.25C11.3807 4.25 12.5 5.36929 12.5 6.75ZM9.99989 11.75C7.47797 11.75 5.30492 13.2437 4.31716 15.3946C5.69252 16.99 7.7283 18 9.99996 18C12.2716 18 14.3073 16.9901 15.6827 15.3947C14.6949 13.2437 12.5219 11.75 9.99989 11.75Z"
                        />
                      </svg>
                    </div>
                    <div className="text-left mx-2">
                      <p className="font-display text-xs">เข้าร่วมแบบ</p>
                      <p className="font-display font-bold">ทั่วไป</p>
                    </div>
                  </div>
                </button>
                <p className="font-display text-xs">
                  เหมาะสำหรับบุคคลทั่วไปทุกเพศทุกวัยที่สะดวกเปิดเผยข้อมูลส่วนตัวและรับของรางวัลเราจะเก็บข้อมูลที่จำเป็นต่อการจัดส่งรางวัล
                  เช่น ชื่อ ที่อยู่ และข้อมูลสำคัญอื่น ๆ
                </p>
              </div>
              <div className={anonymous ? 'text-white' : 'text-gray-600'}>
                <button
                  className={classnames("w-full border rounded-2xl my-4 p-2 sm:px-0", anonymous ? "border-2 border-white " : "border-1 border-gray-600")}
                  onClick={() => setAnonymous(true)}
                  type="button"
                >
                  <div className="flex flex-col sm:flex-row justify-center">
                    <div className="m-2">
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20 10.5C20 16.0228 15.5228 20.5 10 20.5C4.47715 20.5 0 16.0228 0 10.5C0 4.97715 4.47715 0.5 10 0.5C15.5228 0.5 20 4.97715 20 10.5ZM10 6.75C9.53891 6.75 9.1345 6.99902 8.91648 7.37591C8.5708 7.97348 7.80614 8.17769 7.20857 7.83201C6.61099 7.48633 6.40679 6.72167 6.75247 6.12409C7.39897 5.00648 8.61041 4.25 10 4.25C12.0711 4.25 13.75 5.92893 13.75 8C13.75 9.63277 12.7065 11.0218 11.25 11.5366V11.75C11.25 12.4404 10.6904 13 10 13C9.30966 13 8.75002 12.4404 8.75002 11.75V10.5C8.75002 9.80964 9.30966 9.25 10 9.25C10.6904 9.25 11.25 8.69036 11.25 8C11.25 7.30964 10.6904 6.75 10 6.75ZM10 16.75C10.6904 16.75 11.25 16.1904 11.25 15.5C11.25 14.8096 10.6904 14.25 10 14.25C9.30964 14.25 8.75 14.8096 8.75 15.5C8.75 16.1904 9.30964 16.75 10 16.75Z"
                          fill={anonymous ? 'white' : '#4A5563'}
                        />
                      </svg>
                    </div>
                    <div className="text-left mx-2">
                      <p className="font-display text-xs">เข้าร่วมแบบ</p>
                      <p className="font-display font-bold">
                        ไม่เปิดเผยตัวตน
                      </p>
                    </div>
                  </div>
                </button>
                <p className="font-display text-xs">
                  เหมาะสำหรับผู้ที่ต้องการได้รับประสบการณ์การแข่งขันแต่ไม่สะดวกเปิดเผยข้อมูลส่วนตัวหรือไม่สะดวกรับของรางวัลโดยจะไม่มีการแสดงคะแนนต่อสาธารณะในระหว่างการแข่งรวมถึงไม่นำไปคิดคะแนนแข่งขัน
                  และไม่ได้รับของรางวัล
                </p>
              </div>
            </div>
            {anonymous ? <Anonymous /> : <Normal />}
          </div>
          <div className="flex flex-col max-w-sm w-full">
            <Formik
              initialValues={{
                username: '',
                lastName: '',
                email: '',
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500))
                alert(JSON.stringify(values, null, 2))
              }}
            >
              <Form className="font-display text-sm text-white">
                <div className="mt-6">

                </div>

                <div className="py-6 border-b">
                  {!anonymous ? (
                    <>

                    </>
                  ) : (
                    <></>
                  )}
                  <label className="block font-display  my-1" htmlFor="password">
                    ตั้งรหัสผ่าน CMS
                  </label>
                  <Field
                    className="block font-display  w-full bg-black mb-6 p-3 focus:outline-none rounded-md"
                    id="password"
                    name="password"
                    placeholder="ความยาวระหว่าง 8-32 ตัวอักษร"
                    type="password"
                  />
                  <label
                    className="block font-display  my-1"
                    htmlFor="confirmPassword"
                  >
                    ยืนยันรหัสผ่าน
                  </label>
                  <Field
                    className="block font-display  w-full bg-black mb-6 p-3 focus:outline-none rounded-md"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="ยืนยันรหัสผ่าน"
                    type="password"
                  />
                  {!anonymous ? (
                    <>
                      <label className="block font-display  my-1" htmlFor="email">
                        อีเมล
                      </label>
                      <Field
                        className="block font-display  w-full bg-black mb-6 p-3 focus:outline-none rounded-md"
                        id="email"
                        name="email"
                        placeholder="ความยาวไม่เกิน 50 ตัวอักษร"
                        type="email"
                      />
                      <label className="block font-display  my-1" htmlFor="email">
                        เบอร์โทรศัพท์สำหรับติดต่อ
                      </label>
                      <Field
                        className="block font-display  w-full bg-black mb-6 p-3 focus:outline-none rounded-md"
                        id="number"
                        name="number"
                        placeholder="เบอร์โทรศัพท์สำหรับติดต่อ"
                        type="tel"
                      />
                      <label
                        className="block font-display  my-1"
                        htmlFor="address"
                      >
                        ที่อยู่สำหรับส่งของรางวัล
                      </label>
                      <Field
                        className="block font-display  w-full bg-black mb-6 p-3 focus:outline-none rounded-md"
                        id="address"
                        name="address"
                        placeholder="ที่อยู่สำหรับส่งของรางวัล 50 ตัวอักษร"
                        type="address"
                      />
                      <label
                        className="block font-display  my-1"
                        htmlFor="postalNumber"
                      >
                        รหัสไปรษณีย์
                      </label>
                      <Field
                        className="block font-display  w-full bg-black mb-6 p-3 focus:outline-none rounded-md"
                        id="postalNumber"
                        name="postalNumber"
                        placeholder="รหัสไปรษณีย์"
                      />
                      <p className="font-display  w-full mb-4">ขนาดเสื้อ</p>
                      <Field
                        className="inline font-display  mr-3 bg-black mb-2 p-3 focus:outline-none unc"
                        id="sSize"
                        name="size"
                        placeholder=""
                        type="radio"
                      />
                      <label
                        className="inline font-display  my-1"
                        htmlFor="sSize"
                      >
                        S (รอบอก XX ความยาวตัว XX)
                      </label>
                      <br />
                      <Field
                        className="inline font-display  mr-3 bg-black mb-2 p-3 focus:outline-none"
                        id="mSize"
                        name="size"
                        placeholder=""
                        type="radio"
                      />
                      <label
                        className="inline font-display  my-1"
                        htmlFor="mSize"
                      >
                        M (รอบอก XX ความยาวตัว XX)
                      </label>
                      <br />
                      <Field
                        className="inline font-display  mr-3 bg-black mb-2 p-3 focus:outline-none"
                        id="lSize"
                        name="size"
                        placeholder=""
                        type="radio"
                      />
                      <label
                        className="inline font-display  my-1"
                        htmlFor="lSize"
                      >
                        L (รอบอก XX ความยาวตัว XX)
                      </label>
                      <br />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="py-6 border-b ">
                  <p className="font-display my-3">
                    โปรดตรวจสอบข้อมูลของท่านให้เรียบร้อยก่อนกดปุ่มลงทะเบียน
                    เนื่องจากข้อมูลทั้งหมด
                    <span className="text-red-400">
                      {' ไม่สามารถแก้ไขได้อีกต่อไป '}
                    </span>
                    หลังจากกดปุ่มแล้ว
                  </p>
                  {anonymous ? (
                    <></>
                  ) : (
                    <p className="font-display mt-6">
                      หากพบว่าข้อมูลที่ได้รับ ไม่ตรงกับความเป็นจริง
                      หรือข้อมูลบางส่วนบกพร่อง
                      ทางทีมงานมีสิทธิ์ในการยุติการลงทะเบียนของท่านได้
                    </p>
                  )}
                </div>
                <div className="py-6">
                  <button
                    className="bg-red-400 w-full mb-3 rounded-full p-3"
                    type="submit"
                  >
                    Sign up
                  </button>
                  <p className="font-display text-center mb-24">
                    การลงทะเบียนถือว่ายอมรับ
                    <Link href="/">
                      <a className="text-red-400 underline">
                        ข้อตกลงและเงื่อนไขการแข่งขัน
                      </a>
                    </Link>
                  </p>
                </div>
              </Form>
            </Formik>
          </div>
        </div>     </div>
    </main >
  )
}

export default Register
