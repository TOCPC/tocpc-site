import { Formik, Field, Form } from 'formik'
import { Description } from 'components/Description'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { ArrowLeft } from 'components/main/Donation/ArrowLeft'
import classnames from 'classnames'
import promptpay_qr from '../../public/img/promptpay-qr.jpg'

const validate = (values: any) => {
  const errors: any = {}

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

const Donate = () => {
  const router = useRouter()

  return (
    <>
      <Description />
      <main className="relative w-full min-h-screen bg-gray-900">
        <div className="flex flex-col">
          {/* TODO: align */}
          <div
            onClick={() => router.back()}
            className="pl-24 hidden md:flex justify-center w-full mt-28 absolute  cursor-pointer items-center"
          >
            <div className="flex items-center w-full max-w-4xl">
              <ArrowLeft />
              <p className="ml-2 font-display text-white">ย้อนกลับ</p>
            </div>
          </div>
          <div className="flex flex-col items-center px-8 sm:px-40 mt-28 sm:mt-26">
            <div className="max-w-sm w-full">
              <div
                onClick={() => router.back()}
                className="flex md:hidden  cursor-pointer items-center"
              >
                <ArrowLeft />
                <p className="ml-2 font-display text-white">ย้อนกลับ</p>
              </div>
              <p className="text-3xl font-extrabold text-left text-white font-display border-b py-4 w-full">
                บริจาค{' '}
                {router.query.amount
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                บาท
              </p>
              <div className="grid grid-cols-2 gap-6 py-6 border-b w-full ">
                <p className="text-left text-white font-display w-full">
                  ชื่อผู้บริจาค
                  <br />
                  ที่จะแสดงบนเว็บไซต์
                </p>

                {router.query.noSouvenir ? (
                  <p className=" text-red-500 text-left font-display w-full my-auto">
                    ไม่แสดงชื่อผู้บริจาค
                  </p>
                ) : (
                  <p className="text-left text-white font-display w-full my-auto">
                    {router.query.displayName}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-6 py-6 border-b w-full ">
                <p className="text-left text-white font-display w-full">
                  ชื่อ-สกุล
                </p>
                <p className="text-left text-white font-display w-full my-auto">
                  {`${router.query.firstname} ${router.query.lastname}`}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 py-6 border-b w-full ">
                <p className="text-left text-white font-display w-full">
                  ของที่ระลึกที่จะได้รับ
                </p>

                {router.query.noSouvenir ? (
                  <p className=" text-red-500 text-left  font-display w-full">
                    ไม่รับของที่ระลึก
                  </p>
                ) : (
                  <p className="text-left text-white font-display w-full"></p>
                )}
              </div>

              <Formik
                initialValues={{
                  tel: '',
                  address: '',
                  size: '',
                  postcode: '',
                }}
                validate={validate}
                onSubmit={(data) => {}}
                validateOnChange={false}
                validateOnBlur={false}
              >
                {({ errors }) => {
                  return (
                    <Form>
                      <label
                        className="block my-1 mt-6 font-display text-white"
                        htmlFor="address"
                      >
                        ที่อยู่สำหรับส่งของรางวัล
                      </label>
                      <Field
                        className={classnames(
                          'text-white border block w-full bg-black p-3 focus:outline-none rounded-md',
                          errors.address ? 'border-red-400' : 'border-black'
                        )}
                        id="address"
                        name="address"
                        placeholder="ที่อยู่สำหรับส่งของรางวัล"
                        type="address"
                      />
                      {errors.address ? (
                        <p className="mt-1 text-red-400">{errors.address}</p>
                      ) : (
                        <div className="h-6" aria-hidden></div>
                      )}
                      <label
                        className="block my-1 font-display text-white"
                        htmlFor="postcode"
                      >
                        รหัสไปรษณีย์
                      </label>
                      <Field
                        className={classnames(
                          'text-white border block w-full bg-black p-3 focus:outline-none rounded-md',
                          errors.address ? 'border-red-400' : 'border-black'
                        )}
                        id="postcode"
                        name="postcode"
                        placeholder="รหัสไปรษณีย์"
                        type="address"
                      />
                      {errors.postcode ? (
                        <p className="mt-1 text-red-400">{errors.postcode}</p>
                      ) : (
                        <div className="h-6" aria-hidden></div>
                      )}
                      <label
                        className="block  my-1 font-display text-white"
                        htmlFor="tel"
                      >
                        เบอร์โทรศัพท์สำหรับติดต่อ
                      </label>
                      <Field
                        className={classnames(
                          'text-white border block w-full bg-black p-3 focus:outline-none rounded-md',
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
                      <p className="w-full mb-4 font-display text-white">
                        ขนาดเสื้อ
                      </p>
                      <div role="group" aria-labelledby="my-radio-group">
                        <label className="flex items-center my-1 font-display text-white">
                          <Field
                            className="inline mr-3 text-black font-display focus:outline-none unc"
                            name="size"
                            type="radio"
                            value="S"
                          />
                          S (รอบอก XX ความยาวตัว XX)
                        </label>
                        <label className="flex items-center my-1 font-display text-white">
                          <Field
                            className="inline mr-3 text-black font-display focus:outline-none unc"
                            name="size"
                            type="radio"
                            value="M"
                          />
                          M (รอบอก XX ความยาวตัว XX)
                        </label>
                        <label className="flex items-center my-1 font-display text-white">
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
                    </Form>
                  )
                }}
              </Formik>

              <div className="w-full">
                <p className="text-left  py-6 text-white font-display w-full">
                  โอนเงินเข้าบัญชี
                </p>

                <div className="rounded-lg overflow-hidden flex justify-center p-0">
                  <Image
                    className="mx-auto"
                    src={promptpay_qr}
                    placeholder="blur"
                    alt="prompt pay qr-code"
                  />
                </div>
              </div>
              <div className="w-full">
                <p className="text-left  py-6 text-white font-display w-full  font-bold">
                  หลักฐานการโอนเงิน
                </p>

                <div className="text-white rounded-xl overflow-hidden border-separate h-96 p-16 border-dashed border-white border-2">
                  <input type="file" name="" id="" className="text-white " />
                </div>
              </div>
              <button className="bg-red-400 px-8 py-2  w-full font-display my-6 font-semibold rounded-full text-white">
                บริจาค
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-sm text-white"></div>
      </main>
    </>
  )
}

export default Donate
