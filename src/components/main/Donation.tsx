import { Formik, Field, Form } from 'formik'
import { DonationButton } from './Donation/DonationButton'
import { ArrowIcon } from './Donation/ArrowIcon'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import { motion } from 'framer-motion'

const validate = (values: any, donateAmount: any, customDonateAmount: any) => {
  const errors: any = {}
  console.log(values)
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
  if (!values.hideName) {
    if (!values.displayName) {
      errors.displayName = 'จำเป็นต้องใส่'
    } else if (values.displayName.length > 32) {
      errors.displayName = 'ความยาวต้องไม่เกิน 32 ตัวอักษร'
    }
  }

  if (donateAmount == 0) {
    errors.amount = 'จำเป็นเลือกจำนวนเงิน'
  } else if (donateAmount == -1) {
    if (
      parseFloat(customDonateAmount).toString() !== customDonateAmount &&
      customDonateAmount != ''
    )
      errors.amount = 'กรุณากรอกเป็นตัวเลข'
    else if (parseFloat(customDonateAmount) < 0)
      errors.amount = 'จำนวนเงินต้องมากกว่าศูนย์'
  }

  return errors
}

export const Donation = ({ donators }: { donators: Object[] }) => {
  const variants = {
    show: {
      height: 'auto',
      opacity: 1,
    },
    hide: {
      height: 0,
      opacity: 0,
    },
  }
  const router = useRouter()

  const [showAllDonators, setShowAllDonators] = useState(false)

  const [donateAmount, setDonateAmount] = useState(0)
  const [customDonateAmount, setCustomDonateAmount] = useState('')

  const toggleShowAllDonators = () => {
    setShowAllDonators(!showAllDonators)
  }

  const handleSubmitForm = (data: any) => {
    let amount = donateAmount
    if (amount == -1) {
      amount = parseFloat(customDonateAmount)
    }

    router.push({
      pathname: '/donate',
      query: {
        firstname: data.firstname,
        lastname: data.lastname,
        displayName: data.displayName,
        noSouvenir: data.noSouvenir,
        hideName: data.hideName,
        amount,
      },
    })
  }

  const handleCustomDonateAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomDonateAmount(e.target.value)
  }

  return (
    <section className="flex flex-col items-center justify-center px-8 sm:px-16 md:px-24 lg:px-32 py-12 sm:py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-18 max-w-4xl">
        <div className="flex flex-col max-w-sm">
          <p className="font-display text-3xl">ร่วมบริจาค</p>
          <p className="py-6 font-light font-display">
            เนื่องจากเราเป็นกลุ่มผู้ไม่แสวงหาผลกำไร
            และไม่มีค่าใช้จ่ายในการเข้าร่วม
            เราจึงต้องการเงินทุนช่วยเหลือสำหรับการจัดการดูแลตัวตรวจ
            การจัดส่งรางวัล และอื่น ๆ
          </p>
          <ul className="font-light font-display list-disc list-inside text-gray-900">
            <li>บริจาคเกิน 150 บาท รับสติกเกอร์ TOCPC</li>
            <li>บริจาคเกิน 300 บาท รับพวงกุญแจ TOCPC</li>
            <li>บริจาคเกิน 1,000 บาท รับเสื้อยืด TOCPC</li>
          </ul>
        </div>
        <Formik
          initialValues={{
            firstname: '',
            lastname: '',
            displayName: '',
            amount: 0,
            hideName: false,
            noSouvenir: false,
          }}
          validate={(value) =>
            validate(value, donateAmount, customDonateAmount)
          }
          onSubmit={(data) => {
            handleSubmitForm(data)
          }}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ errors }) => {
            return (
              <Form>
                <div>
                  <p className="font-light font-display text-sm text-gray-500 mb-2">
                    จำนวนเงินที่ต้องการบริจาค
                  </p>
                  <div role="group" aria-labelledby="my-radio-group">
                    <div className="flex my-2 w-full gap-4">
                      {[150, 300, 500].map((val, key) => {
                        return (
                          <div
                            className="w-full"
                            onClick={() => {
                              setDonateAmount(val)
                            }}
                            key={`donate-button-${key}`}
                          >
                            <DonationButton
                              amount={val}
                              isSelected={val === donateAmount}
                            />
                          </div>
                        )
                      })}
                    </div>
                    <div className="flex my-2 w-full gap-4">
                      {[1000, 2000].map((val, key) => {
                        return (
                          <div
                            className="w-full"
                            onClick={() => {
                              setDonateAmount(val)
                            }}
                            key={`donate-button-${key}`}
                          >
                            <DonationButton
                              amount={val}
                              isSelected={val === donateAmount}
                            />
                          </div>
                        )
                      })}
                      <div className="w-full">
                        <input
                          onChange={handleCustomDonateAmountChange}
                          onClick={() => {
                            setDonateAmount(-1)
                          }}
                          placeholder="ระบุ..."
                          className={`transition text-center font-display text-sm border-gray-500 w-full py-2 border rounded-md shadow-sm hover:text-white hover:bg-gray-900 focus:outline-none ${
                            donateAmount == -1
                              ? 'text-white bg-gray-900'
                              : 'text-gray-500'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  {errors.amount ? (
                    <p className="h-6 mt-1 text-left font-light font-display text-sm text-red-500">
                      {errors.amount}
                    </p>
                  ) : (
                    <div className="h-6 mt-1" aria-hidden></div>
                  )}
                  <p className="font-light font-display text-sm text-gray-500 mb-2">
                    *ท่านต้องกรอกที่อยู่จัดส่งในหน้าถัดไปเพื่อรับเสื้อยืด TOCPC
                    เป็นของที่ระลึก
                  </p>

                  <div className="flex w-full gap-4 text-black">
                    <div className="w-full flex flex-col">
                      <Field
                        className={classnames(
                          'font-light font-display text-gray-500 border-gray-500 w-full py-2 px-3 border rounded-md shadow-sm text-sm focus:outline-none',
                          errors.firstname
                            ? 'border-red-400'
                            : 'border-gray-500'
                        )}
                        id="firstname"
                        name="firstname"
                        placeholder="ชื่อ"
                      />
                      {errors.firstname ? (
                        <p className="h-6 mt-1 font-light font-display  text-sm text-red-400">
                          {errors.firstname}
                        </p>
                      ) : (
                        <div className="h-6 mt-1" aria-hidden></div>
                      )}
                    </div>
                    <div className="w-full flex flex-col">
                      <Field
                        className={classnames(
                          'font-light font-display text-gray-500 border-gray-500 w-full py-2 px-3 border rounded-md shadow-sm text-sm focus:outline-none',
                          errors.lastname ? 'border-red-400' : 'border-gray-500'
                        )}
                        id="lastname"
                        name="lastname"
                        placeholder="สกุล"
                      />
                      {errors.lastname ? (
                        <p className="h-6 mt-1 font-light font-display text-sm text-red-400">
                          {errors.lastname}
                        </p>
                      ) : (
                        <div className="h-6 mt-1" aria-hidden></div>
                      )}
                    </div>
                  </div>
                  <div className="w-full flex flex-col">
                    <Field
                      className={classnames(
                        'font-light font-display text-gray-500 border-gray-500 w-full py-2 px-3 border rounded-md shadow-sm text-sm focus:outline-none',
                        errors.displayName
                          ? 'border-red-400'
                          : 'border-gray-500'
                      )}
                      id="displayName"
                      name="displayName"
                      placeholder="ชื่อที่ต้องการให้แสดงบนเว็บไซต์"
                    />
                    {errors.displayName ? (
                      <p className="h-6 mt-1 font-light font-display text-sm text-red-400">
                        {errors.displayName}
                      </p>
                    ) : (
                      <div className="h-6 mt-1" aria-hidden></div>
                    )}
                  </div>

                  <div className="flex w-full justify-between items-center">
                    <div className="flex flex-col font-light font-display text-gray-500 text-sm lg:text-base">
                      <div>
                        <Field
                          type="checkbox"
                          className="mr-2 rounded-lg"
                          id="hideName"
                          name="hideName"
                          placeholder="ชื่อที่ต้องการให้แสดงบนเว็บไซต์"
                        />
                        <label htmlFor="hideName">
                          ไม่แสดงชื่อผู้บริจาคบนเว็บไซต์
                        </label>
                      </div>
                      <div>
                        <Field
                          type="checkbox"
                          className="mr-2 rounded-lg"
                          id="noSouvenir"
                          name="noSouvenir"
                          placeholder="ชื่อที่ต้องการให้แสดงบนเว็บไซต์"
                        />
                        <label htmlFor="noSouvenir">ไม่รับของที่ระลึก</label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-red-400 px-3 sm:px-4 py-2 font-semibold rounded-full text-white"
                    >
                      ถัดไป
                    </button>
                  </div>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>

      <div className="flex flex-col border-black justify-center border-t border-b max-w-4xl w-full mt-16">
        <div className="flex bg-white -mt-4 w-min pl-1 pr-4">
          <p className="font-display text-2xl w-max">รายชื่อผู้ร่วมบริจาค</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-4">
          {donators
            .slice(Math.max(donators.length - 12, 0))
            .map((donator: any, key) => {
              return (
                <div
                  key={`donator-${key}`}
                  className="flex flex-col items-center justify-center py-4 md:py-8"
                >
                  <p className="font-display font-semibold">{donator.name}</p>
                  <p className="font-display font-semibold text-red-400">
                    {donator.amount}฿
                  </p>
                </div>
              )
            })}
        </div>
        <div className="overflow-hidden">
          <motion.div
            variants={variants}
            animate={showAllDonators ? 'show' : 'hide'}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-4">
              {donators.slice(12).map((donator: any, key) => {
                return (
                  <div
                    key={`donator-${key}`}
                    className="flex flex-col items-center justify-center py-4 md:py-8"
                  >
                    <p className="font-display font-semibold">{donator.name}</p>
                    <p className="font-display font-semibold text-red-400">
                      {donator.amount}฿
                    </p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
        <div className="flex w-full justify-center items-center ">
          <button onClick={toggleShowAllDonators}>
            <div className="flex justify-center items-center gap-2 bg-white -mb-3 w-min px-4 z-10 relative">
              <motion.div
                animate={showAllDonators ? { rotate: 180 } : { rotate: 0 }}
              >
                <ArrowIcon />
              </motion.div>
              <p className="font-display w-max">
                {showAllDonators ? 'แสดงน้อยลง' : 'ดูเพิ่มเติม'}
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
