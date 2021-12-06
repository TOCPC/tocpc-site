import { Formik, Field, Form } from 'formik'
import { MetaData } from 'components/Meta'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { ArrowLeft } from 'components/main/Donation/ArrowLeft'
import { FileIcon } from 'components/main/Donation/FileIcon'
import classnames from 'classnames'
import promptpay from '../../public/img/promptpay.jpg'
import { useDropzone } from 'react-dropzone'
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckIcon } from 'components/main/Donation/CheckIcon'
import { uploadFromBlobAsync } from 'lib/storage'
import { v4 as uuidv4 } from 'uuid'

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
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<any>(null)
  const [message, setMessage] = useState('')

  const [souvenirs, setSouvenirs] = useState<string[]>([])
  const [getShirt, setGetShirt] = useState(false)
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

  const souvenirList = useMemo(
    () => [
      { name: 'สติกเกอร์', min: 150 },
      { name: 'พวงกุญแจ', min: 300 },
      { name: 'เสื้อยืด', min: 1000 },
    ],
    []
  )

  useEffect(() => {
    if (!noSouvenir) {
      if (amount >= souvenirList[2].min) setGetShirt(true)
      souvenirList.forEach((item: { name: string; min: number }) => {
        if (amount >= item.min) {
          setSouvenirs((val) => [...val, item.name])
        }
      })
    }
  }, [amount, noSouvenir, souvenirList])

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file: any) => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  const handleSubmitForm = async (data: any, file: File) => {
    const uuid = uuidv4()

    const donator = {
      firstname,
      lastname,
      displayName,
      amount,
      hideName,
      noSouvenir,
      souvenirs,
      uuid,
    }

    try {
      await uploadFromBlobAsync({
        blobUrl: URL.createObjectURL(file),
        name: `${uuid}_${file.name}_${Date.now()}`,
      })
    } catch (e) {
      setIsLoading(false)
      setError(e)
      return
    }

    fetch('/api/donate', {
      method: 'POST',
      body: JSON.stringify({ data, donator }),
      headers: {
        'Content-Type': 'application/json',
      },
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
          className="fixed z-10 flex items-center justify-center w-full h-screen px-4 "
        >
          <div className="flex flex-col items-center justify-center w-full max-w-lg px-4 bg-white rounded-lg shadow-xl h-72">
            <CheckIcon />

            <p className="text-center font-display">ขอขอบพระคุณ</p>
            <p className="py-6 font-light text-center font-display">
              ของที่ระลึกจะถูกจัดส่งไปตามที่อยู่ที่ท่านกรอกมา
              ขอบคุณที่เป็นผู้สนับสนุนให้แก่งาน TOCPC2021
            </p>
            <button
              onClick={() => router.replace('/')}
              type="button"
              className="px-4 py-2 text-white bg-red-400 rounded-full font-display"
            >
              กลับไปหน้าแรก
            </button>
          </div>
        </motion.div>
        <div className="flex flex-col">
          <div
            onClick={() => router.back()}
            className="absolute items-center justify-center hidden w-full px-10 cursor-pointer sm:px-16 md:px-24 md:flex mt-28"
          >
            <div className="flex items-center w-full max-w-4xl">
              <ArrowLeft />
              <p className="ml-2 text-white font-display">ย้อนกลับ</p>
            </div>
          </div>

          <div className="flex flex-col items-center px-8 sm:px-40 mt-28 sm:mt-26">
            <div className="w-full max-w-md">
              <div
                onClick={() => router.back()}
                className="flex items-center cursor-pointer md:hidden"
              >
                <ArrowLeft />
                <p className="ml-2 text-white font-display">ย้อนกลับ</p>
              </div>
              <p className="w-full py-4 text-3xl font-extrabold text-left text-white border-b font-display">
                บริจาค{' '}
                {amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} บาท
              </p>
              <div className="grid w-full grid-cols-2 gap-6 py-6 border-b ">
                <p className="w-full text-left text-white font-display">
                  ชื่อผู้บริจาค
                  <br />
                  ที่จะแสดงบนเว็บไซต์
                </p>

                {hideName ? (
                  <p className="w-full my-auto text-left text-red-500 font-display">
                    ไม่แสดงชื่อผู้บริจาค
                  </p>
                ) : (
                  <p className="w-full my-auto text-left text-white font-display">
                    {displayName}
                  </p>
                )}
              </div>
              <div className="grid w-full grid-cols-2 gap-6 py-6 border-b ">
                <p className="w-full my-auto text-left text-white font-display">
                  ชื่อ-สกุล
                </p>
                <p className="w-full my-auto text-left text-white font-display">
                  {`${firstname} ${lastname}`}
                </p>
              </div>
              <div className="grid w-full grid-cols-2 gap-6 py-6 border-b ">
                <p className="w-full text-left text-white font-display">
                  ของที่ระลึกที่จะได้รับ
                </p>

                {noSouvenir ? (
                  <p className="w-full text-left text-red-500 font-display">
                    ไม่รับของที่ระลึก
                  </p>
                ) : (
                  <p className="w-full text-left text-white font-display">
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
                            className="block my-1 mt-6 text-white font-display"
                            htmlFor="address"
                          >
                            ที่อยู่สำหรับส่งของที่ระลึก
                          </label>
                          <Field
                            className={classnames(
                              'text-white border block w-full bg-black p-3 focus:outline-none rounded-md',
                              errors.address ? 'border-red-400' : 'border-black'
                            )}
                            id="address"
                            name="address"
                            placeholder="ที่อยู่สำหรับส่งของที่ระลึก"
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
                            className="block my-1 text-white font-display"
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
                            className="block my-1 text-white font-display"
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
                          <p className="w-full mb-4 text-white font-display">
                            ขนาดเสื้อ
                          </p>
                          <div
                            className="text-white"
                            role="group"
                            aria-labelledby="my-radio-group"
                          >
                            <label className="flex items-center my-1 font-display">
                              <Field
                                className="inline mr-3 text-black font-display focus:outline-none unc"
                                name="size"
                                type="radio"
                                value="S"
                              />
                              S (รอบอก 32 ความยาวตัว 25)
                            </label>
                            <label className="flex items-center my-1 font-display">
                              <Field
                                className="inline mr-3 text-black font-display focus:outline-none unc"
                                name="size"
                                type="radio"
                                value="M"
                              />
                              M (รอบอก 36 ความยาวตัว 27)
                            </label>
                            <label className="flex items-center my-1 font-display">
                              <Field
                                className="inline mr-3 text-black font-display focus:outline-none unc"
                                name="size"
                                type="radio"
                                value="L"
                              />
                              L (รอบอก 40 ความยาวตัว 29)
                            </label>
                            <label className="flex items-center my-1 font-display">
                              <Field
                                className="inline mr-3 text-black font-display focus:outline-none unc"
                                name="size"
                                type="radio"
                                value="XL"
                              />
                              XL (รอบอก 44 ความยาวตัว 31)
                            </label>
                            <label className="flex items-center my-1 font-display">
                              <Field
                                className="inline mr-3 text-black font-display focus:outline-none unc"
                                name="size"
                                type="radio"
                                value="2XL"
                              />
                              2XL (รอบอก 48 ความยาวตัว 32)
                            </label>
                            <label className="flex items-center my-1 font-display">
                              <Field
                                className="inline mr-3 text-black font-display focus:outline-none unc"
                                name="size"
                                type="radio"
                                value="3XL"
                              />
                              3XL (รอบอก 52 ความยาวตัว 33)
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
                        <p className="w-full py-6 text-left text-white font-display">
                          โอนเงินเข้าบัญชี
                        </p>
                        <div className="flex justify-center">
                          <div className="flex flex-col items-center justify-center pb-4 bg-white rounded-xl">
                            <span className="w-40 sm:w-48">
                              <Image src={promptpay} alt="promptpay header" />
                            </span>
                            <div className="flex justify-center mx-12 sm:mx-20 md:mx-24">
                              <QRCode value={payload} size={200} />
                            </div>
                            <p className="mt-4 text-lg font-medium text-green-300 font-display">
                              สแกน QR เพื่อโอนเงินเข้าบัญชี
                            </p>
                            <p className="text-lg text-gray-800 font-display">
                              ชื่อ: นาย ณัฐพงษ์ ดิสสานนท์
                            </p>
                            <p className="text-lg text-gray-800 font-display">
                              บัญชี: {mobileNumber}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center w-full p-0 overflow-hidden rounded-lg "></div>
                      </div>
                      <div className="w-full">
                        <p className="w-full py-6 font-bold text-left text-white font-display">
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
                              className="px-2 py-1 text-sm text-black bg-white rounded-md font-display"
                            >
                              Upload a file
                            </button>
                            <p className="ml-2 text-sm text-gray-500 font-display">
                              or drag and drop
                            </p>
                          </div>
                          <p className="text-sm text-gray-500 font-display ">
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
                        className="w-full px-8 py-2 my-6 font-semibold text-white bg-red-400 rounded-full font-display"
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
