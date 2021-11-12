import { Formik, Field, Form } from 'formik'
import { MetaData } from 'components/Meta'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { ArrowLeft } from 'components/main/Donation/ArrowLeft'
import { FileIcon } from 'components/main/Donation/FileIcon'
import classnames from 'classnames'
import promptpay_qr_upper from '../../public/img/promptpay-qr-upper.jpg'
import promptpay_qr_lower from '../../public/img/promptpay-qr-lower.jpg'
import { useDropzone } from 'react-dropzone'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckIcon } from 'components/main/Donation/CheckIcon'

const generatePayload = require('promptpay-qr')
var QRCode = require('qrcode.react')

const validate = (
  values: any,
  requireAddress: boolean,
  requireSize: boolean,
  uploadedFiles: number
) => {
  const errors: any = {}

  if (requireAddress) {
    if (!values.postcode) {
      errors.postcode = 'จำเป็นต้องใส่'
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
  }

  if (requireSize) {
    if (!values.size) {
      errors.size = 'จำเป็นต้องใส่'
    }
  }

  if (uploadedFiles == 0) {
    errors.file = 'จำเป็นต้องอัพโหลดไฟล์'
  }
  return errors
}

const Donate = () => {
  const [showModal, setShowModal] = useState(false)

  const [files, setFiles] = useState<any[]>([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles: any) => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const router = useRouter()

  const displayName = router.query.displayName
  const firstname = router.query.firstname
  const lastname = router.query.lastname
  const noSouvenir = router.query.noSouvenir === 'true'
  const hideName = router.query.hideName === 'true'
  const amount: number = router.query.amount
    ? parseFloat(parseFloat(router.query.amount.toString()).toFixed(2))
    : 0

  const mobileNumber = '096-858-4208'
  const payload = generatePayload(mobileNumber, { amount })
  const souvenirList = [
    { name: 'สติกเกอร์', min: 150 },
    { name: 'พวงกุญแจ', min: 300 },
    { name: 'เสื้อยืด', min: 1000 },
  ]

  let souvenirs: string[] = []

  let getShirt = false
  if (!noSouvenir) {
    if (amount >= souvenirList[2].min) getShirt = true
    souvenirList.forEach((item: { name: string; min: number }) => {
      if (amount >= item.min) {
        souvenirs.push(item.name)
      }
    })
  }

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file: any) => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  const handleSubmitForm = async (data: any, file: File) => {
    const donator = {
      firstname,
      lastname,
      displayName,
      amount,
      hideName,
      noSouvenir,
      souvenirs,
    }

    fetch('/api/donate', {
      method: 'POST',
      body: JSON.stringify({ data, donator }),
    }).then((res) => {
      if (res.status == 200) {
        setShowModal(true)
      }
    })
  }

  const variants = {
    show: {
      height: '100vh',
      opacity: 1,
    },
    hide: {
      height: 0,
      opacity: 0,
    },
  }

  return (
    <>
      <MetaData />
      <main className="relative w-full min-h-screen bg-gray-900">
        <motion.div
          variants={variants}
          initial={'hide'}
          animate={showModal ? 'show' : 'hide'}
          className="flex w-full fixed z-10 h-screen justify-center items-center px-4 "
        >
          <div className="bg-white w-full max-w-lg h-72 rounded-lg shadow-xl flex flex-col justify-center items-center px-4">
            <CheckIcon />

            <p className="font-display text-center">ขอบคุณจ้า</p>
            <p className="py-6 font-light font-display text-center">
              ของที่ระลึกจะถูกจัดส่งไปตามที่อยู่ที่ท่านกรอกมา
              ขอบคุณที่เป็นสนับสนุน บลาบลาบลาบลาบลาบลาบลาบลาบลาบลาบลาบลาบลา
            </p>
            <button
              onClick={() => router.replace('/')}
              type="button"
              className="bg-red-400 px-4 py-2 rounded-full text-white"
            >
              กลับไปหน้าแรก
            </button>
          </div>
        </motion.div>
        <div className="flex flex-col">
          <div
            onClick={() => router.back()}
            className="px-10 sm:px-16 md:px-24 hidden md:flex justify-center w-full mt-28 absolute cursor-pointer items-center"
          >
            <div className="flex items-center w-full max-w-4xl">
              <ArrowLeft />
              <p className="ml-2 font-display text-white">ย้อนกลับ</p>
            </div>
          </div>

          <div className="flex flex-col items-center px-8 sm:px-40 mt-28 sm:mt-26">
            <div className="max-w-md w-full">
              <div
                onClick={() => router.back()}
                className="flex md:hidden cursor-pointer items-center"
              >
                <ArrowLeft />
                <p className="ml-2 font-display text-white">ย้อนกลับ</p>
              </div>
              <p className="text-3xl font-extrabold text-left text-white font-display border-b py-4 w-full">
                บริจาค{' '}
                {amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} บาท
              </p>
              <div className="grid grid-cols-2 gap-6 py-6 border-b w-full ">
                <p className="text-left text-white font-display w-full">
                  ชื่อผู้บริจาค
                  <br />
                  ที่จะแสดงบนเว็บไซต์
                </p>

                {hideName ? (
                  <p className=" text-red-500 text-left font-display w-full my-auto">
                    ไม่แสดงชื่อผู้บริจาค
                  </p>
                ) : (
                  <p className="text-left text-white font-display w-full my-auto">
                    {displayName}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-6 py-6 border-b w-full ">
                <p className="text-left text-white font-display w-full my-auto">
                  ชื่อ-สกุล
                </p>
                <p className="text-left text-white font-display w-full my-auto">
                  {`${firstname} ${lastname}`}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 py-6 border-b w-full ">
                <p className="text-left text-white font-display w-full">
                  ของที่ระลึกที่จะได้รับ
                </p>

                {noSouvenir ? (
                  <p className=" text-red-500 text-left font-display w-full">
                    ไม่รับของที่ระลึก
                  </p>
                ) : (
                  <p className="text-left text-white font-display w-full">
                    {souvenirs.length === 0
                      ? 'ไม่ได้รับของที่ระลึก'
                      : souvenirs.join(' ')}
                  </p>
                )}
              </div>

              <Formik
                initialValues={{
                  tel: '',
                  address: '',
                  size: '',
                  postcode: '',
                  file: '',
                }}
                validate={(values) =>
                  validate(values, souvenirs.length > 0, getShirt, files.length)
                }
                onSubmit={(data) =>
                  handleSubmitForm(data, files[files.length - 1])
                }
                validateOnChange={false}
                validateOnBlur={false}
              >
                {({ errors }) => {
                  return (
                    <Form>
                      {souvenirs.length > 0 ? (
                        <>
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
                            <p className="mt-1 text-red-400">
                              {errors.address}
                            </p>
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
                              errors.postcode
                                ? 'border-red-400'
                                : 'border-black'
                            )}
                            id="postcode"
                            name="postcode"
                            placeholder="รหัสไปรษณีย์"
                            type="address"
                          />
                          {errors.postcode ? (
                            <p className="mt-1 text-red-400">
                              {errors.postcode}
                            </p>
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
                        </>
                      ) : (
                        <></>
                      )}
                      {getShirt ? (
                        <>
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
                        </>
                      ) : (
                        <></>
                      )}
                      <div className="w-full">
                        <p className="text-left py-6 text-white font-display w-full">
                          โอนเงินเข้าบัญชี
                        </p>
                        <div className="flex justify-center">
                          <div className="bg-white">
                            <Image
                              src={promptpay_qr_upper}
                              layout="responsive"
                            />

                            <div className="flex justify-center mx-20 md:mx-24">
                              <QRCode value={payload} size={128} />
                            </div>
                            <Image
                              src={promptpay_qr_lower}
                              layout="responsive"
                            />
                          </div>
                        </div>
                        <div className="rounded-lg overflow-hidden flex justify-center p-0 w-full "></div>
                      </div>
                      <div className="w-full">
                        <p className="text-left  py-6 text-white font-display w-full font-bold">
                          หลักฐานการโอนเงิน
                        </p>

                        <div
                          {...getRootProps({ className: 'dropzone' })}
                          className={classnames(
                            'overflow-hidden relative text-white rounded-xl border-separate h-96 border-dashed  border-2 flex flex-col gap-2 justify-center items-center',
                            errors.file ? 'border-red-400' : 'border-white'
                          )}
                        >
                          {files.length > 0 ? (
                            <img
                              src={files[files.length - 1].preview}
                              alt=""
                              className="absolute z-0 max-h-full"
                            />
                          ) : (
                            <></>
                          )}
                          <input {...getInputProps()} />

                          <FileIcon />
                          <div className="flex items-center">
                            <button
                              type="button"
                              className="bg-white rounded-md text-black font-display text-sm py-1 px-2"
                            >
                              Upload a file
                            </button>
                            <p className="font-display text-sm text-gray-500 ml-2">
                              or drag and drop
                            </p>
                          </div>
                          <p className="font-display text-sm text-gray-500 ">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                        {errors.file ? (
                          <p className="mt-1 text-red-400">{errors.file}</p>
                        ) : (
                          <div className="h-6" aria-hidden></div>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="bg-red-400 px-8 py-2  w-full font-display my-6 font-semibold rounded-full text-white"
                      >
                        บริจาค
                      </button>
                    </Form>
                  )
                }}
              </Formik>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-sm text-white"></div>
      </main>
    </>
  )
}

export default Donate
