import type { NextPage } from 'next'
import Head from 'next/head'
import { MainFootage } from 'components/footage'
import { ProgLogo } from 'components/ProgLogo'
import Countup from 'react-countup'

const Home: NextPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>TOCPC 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative w-full">
        <div className="absolute right-full bg-red-400 w-20 h-full transform translate-x-2 sm:translate-x-10 md:translate-x-20 z-10"></div>
        <div className="w-full">
          <section className="w-full h-screen bg-gray-800 relative overflow-hidden">
            <div className="block absolute h-full w-full">
              <div className="relative h-full max-w-7xl">
                <MainFootage />
              </div>
            </div>
            <div className="block absolute h-full w-full">
              <div className="flex flex-col w-full h-screen items-center justify-center">
                <div>
                  <p className="font-display py-1 font-extrabold text-4xl sm:text-5xl text-white text-center">
                    Thailand
                  </p>
                  <p className="font-display py-1 font-extrabold text-4xl sm:text-5xl text-white text-center">
                    Online
                  </p>
                  <p className="font-display py-1 font-extrabold text-4xl sm:text-5xl text-white text-center">
                    Competitive
                  </p>
                  <p className="font-display py-1 font-extrabold text-4xl sm:text-5xl text-white text-center">
                    Programming
                  </p>
                  <p className="font-display py-1 font-extrabold text-4xl sm:text-5xl text-white text-center">
                    Contest
                  </p>
                  <p className="font-display py-1 font-extrabold text-4xl sm:text-5xl text-white text-center">
                    2021
                  </p>
                  <p className="font-display py-6 text-white text-center">
                    20-21 NOV 2021
                  </p>
                </div>
                <div className="pt-6">
                  <button className="bg-red-400 px-8 py-4 sm:px-10 sm:py-6 text-white text-2xl font-semibold rounded-full">
                    Register
                  </button>
                  <p className="font-display py-4 text-white text-center">
                    until 19 NOV 2021
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center w-full h-auto bg-gray-800 px-8 sm:px-20 md:px-32 py-10 sm:py-18">
            <div className="flex max-w-4xl rounded-xl shadow-2xl overflow-hidden w-full">
              <div className="flex flex-col w-full h-full p-6 sm:p-10 md:p-16">
                <div className="flex flex-col gap-2">
                  <p className="font-display text-3xl text-white">Overview</p>
                  <div
                    className="w-24 h-2 bg-red-400 mt-1"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col gap-4 mt-6">
                  <div className="flex">
                    <span className="h-5 w-5 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white fill-current"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="font-display text-white ml-6">
                      20-21 พฤศจิกายน 2021 (เสาร์-อาทิตย์) แข่งออนไลน์วันละ 3
                      ชั่วโมง
                    </p>
                  </div>
                  <div className="flex">
                    <span className="h-5 w-5 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white fill-current"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="font-display text-white ml-6">
                      สมัครได้ทุกคน ทุกเพศ ทุกวัย ไม่จำกัดอายุหรือสถานะ
                    </p>
                  </div>
                  <div className="flex">
                    <span className="h-5 w-5 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white fill-current"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="font-display text-white ml-6">
                      ในการแข่งขัน
                      ทุกคนจะได้รับโจทย์แข่งขันคอมพิวเตอร์โอลิมปิกเหมือนกัน 3
                      ข้อ
                    </p>
                  </div>
                  <div className="flex">
                    <span className="h-5 w-5 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white fill-current"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="font-display text-white ml-6">
                      ขอบเขตเนื้อหาเทียบเคียงได้กับโจทย์ในการแข่งขันคอมพิวเตอร์โอลิมปิกระหว่างประเทศ
                      (IOI) แต่จะไม่เกินการแข่งขันคอมพิวเตอร์โอลิมปิกระดับชาติ
                      (TOI)
                    </p>
                  </div>
                  <div className="flex">
                    <span className="h-5 w-5 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white fill-current"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>

                    <p className="font-display text-white ml-6">
                      โจทย์ทุกข้อจะใช้การเขียนอ่านข้อมูลทาง standard input
                      (คีย์บอร์ด) และ standard output (หน้าจอ) เท่านั้น
                      จะไม่มีโจทย์ประเภท interactive หรือ output-only
                      และจะอนุญาตให้ใช้เฉพาะภาษา C และ C++ เท่านั้น
                      โดยมีรุ่นของภาษาเป็น C11 และ C++11 ตามลำดับ
                    </p>
                  </div>
                  <div className="flex">
                    <span className="h-5 w-5 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white fill-current"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>

                    <p className="font-display text-white ml-6">
                      ใช้ระบบจัดการแข่งขัน CMS (Contest Management System)
                      ซึ่งเป็นระบบเดียวกับที่ใช้ในการแข่งขันคอมพิวเตอร์โอลิมปิกระหว่างประเทศ
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-3xl py-10">
              <p className="font-display text-3xl text-white">การคิดคะแนน</p>
              <div className="flex flex-col py-6">
                <div className="flex">
                  <span className="h-8 flex items-center">
                    <span className="relative z-10 w-4 h-4 flex items-center justify-center bg-red-400 rounded-full -mt-1"></span>
                  </span>
                  <p className="text-white font-display ml-4">
                    ผู้เข้าแข่งขันจะสามารถเห็นคะแนนของตนเองได้ทันทีที่ส่ง
                    (Complete Feedback)
                  </p>
                </div>
                <div className="flex">
                  <span className="h-8 flex items-center">
                    <span className="relative z-10 w-4 h-4 flex items-center justify-center bg-red-400 rounded-full -mt-1"></span>
                  </span>
                  <p className="text-white font-display ml-4">
                    ส่งได้ไม่จำกัดจำนวนครั้ง (รออย่างน้อย 30 วินาที
                    สำหรับการส่งครั้งถัดไป)
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-white font-display mb-6">
                  ในโจทย์แต่ละข้อเราจะแบ่งออกเป็นปัญหาย่อย (subtasks) หลายๆ
                  ปัญหาย่อย ในแต่ละปัญหาย่อยจะประกอบด้วยข้อมูลทดสอบหลายชุด
                  ผู้เข้าแข่งขันจะได้คะแนนเต็มของปัญหาย่อย
                  ก็ต่อเมื่อผู้เข้าแข่งขันได้คะแนนเต็มของข้อมูลทดสอบทุกชุดในปัญหาย่อยนั้นๆ
                  หากมีการผิดพลาดแม้แต่ชุดทดสอบเดียว
                  จะถือว่าปัญหาย่อยนั้นได้คะแนนเป็นศูนย์
                  กฎดังกล่าวอาจมีการเปลี่ยนแปลง
                  และจะมีการแจ้งในโจทย์แต่ละข้อหากมีการคิดคะแนนที่แตกต่างออกไป
                  (เช่น ไม่มีปัญหาย่อย นับคะแนนตามจำนวนชุดทดสอบ หรือ
                  นับคะแนนตามประสิทธิภาพของคำตอบ)
                </p>
                <p className="text-white font-display">
                  หากผู้เข้าแข่งขันส่งหลายครั้ง
                  คะแนนสุดท้ายที่จะได้รับคือผลรวมของคะแนนสุดท้ายในแต่ละปัญหาย่อย
                  และคะแนนสุดท้ายในแต่ละปัญหาย่อย
                  คือค่ามากสุดของคะแนนที่ได้รับในปัญหาย่อยนั้นจากการส่งทุกครั้งที่ผ่านมา
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center px-8 sm:px-20 md:px-32 py-12 sm:py-24 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-18 max-w-4xl">
              <div className="flex flex-col">
                <p className="font-display font-semibold text-2xl">
                  ร่วมบริจาค
                </p>
                <p className="font-display font-thin text-2xl pt-10">
                  เนื่องจากเราเป็นกลุ่มผู้ไม่แสวงหาผลกำไร
                  และไม่มีค่าใช้จ่ายในการเข้าร่วม
                  เราจึงต้องการเงินทุนช่วยเหลือสำหรับการจัดการดูแลตัวตรวจ
                  การจัดส่งรางวัล และอื่น ๆ
                </p>
              </div>
              <div>
                <div className="flex">
                  <div className="py-2.5 mr-10 w-1/2">
                    <div className="bg-gray-200 py-6 rounded-full w-full" />
                  </div>
                  <div className="py-2.5 w-1/2">
                    <div className="bg-gray-200 py-6 rounded-full w-full" />
                  </div>
                </div>
                <div className="py-2.5 w-full">
                  <div className="bg-gray-200 py-6 rounded-full w-full" />
                </div>
                <div className="py-2.5 w-full">
                  <div className="bg-gray-200 py-6 rounded-full w-full" />
                </div>
                <div className="py-2.5 w-full">
                  <div className="bg-gray-200 py-6 rounded-full w-full" />
                </div>
                <div className="py-2.5 w-full flex flex-row-reverse">
                  <button className="bg-red-400 px-4 py-4 text-2xl font-semibold rounded-full w-1/2 text-white">
                    Donate
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col border-black justify-center border-t border-b max-w-4xl w-full mt-16">
              <div className="flex bg-white -mt-4 w-min pl-1 pr-4">
                <p className="font-display text-2xl w-max">
                  รายชื่อผู้ร่วมบริจาค
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4">
                <div className="flex flex-col items-center justify-center py-4 md:py-8">
                  <p className="font-display font-semibold">iammarkps</p>
                  <p className="font-display font-semibold text-red-400">
                    1600฿
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center py-4 md:py-8">
                  <p className="font-display font-semibold">iammarkps</p>
                  <p className="font-display font-semibold text-red-400">
                    1600฿
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center py-4 md:py-8">
                  <p className="font-display font-semibold">iammarkps</p>
                  <p className="font-display font-semibold text-red-400">
                    1600฿
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center py-4 md:py-8">
                  <p className="font-display font-semibold">iammarkps</p>
                  <p className="font-display font-semibold text-red-400">
                    1600฿
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center py-4 md:py-8">
                  <p className="font-display font-semibold">iammarkps</p>
                  <p className="font-display font-semibold text-red-400">
                    1600฿
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center py-4 md:py-8">
                  <p className="font-display font-semibold">iammarkps</p>
                  <p className="font-display font-semibold text-red-400">
                    1600฿
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center py-4 md:py-8">
                  <p className="font-display font-semibold">iammarkps</p>
                  <p className="font-display font-semibold text-red-400">
                    1600฿
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center py-4 md:py-8">
                  <p className="font-display font-semibold">iammarkps</p>
                  <p className="font-display font-semibold text-red-400">
                    1600฿
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center w-full bg-gray-800">
            <div className="flex py-48 items-center justify-center">
              <div className="flex flex-col">
                <p className="font-display text-xl sm:text-2xl text-white text-right">
                  สมัครแล้ว
                </p>
                <p className="font-display text-xl sm:text-2xl text-white text-right">
                  กว่า
                </p>
              </div>
              <p className="font-display text-6xl sm:text-8xl text-red-400 font-bold px-4">
                0
              </p>

              <p className="font-display text-3xl sm:text-5xl text-white font-medium">
                คน
              </p>
            </div>
            <div className="px-6 sm:px-20 md:px-32 w-full flex items-center justify-center pb-12">
              <div className="flex flex-col justify-center items-center border border-red-400 max-w-4xl w-full rounded-3xl">
                <div className="flex flex-col items-center bg-gray-800 -mt-5 px-1 md:px-4 pb-8 sm:pb-16 lg:pb-24 max-w-xl">
                  <p className="font-display text-red-400 font-semibold text-sm sm:text-md">
                    กำหนดการ
                  </p>
                  <p className="font-display text-red-400 text-sm sm:text-md text-center">
                    GMT+7 (เวลามาตรฐานประเทศไทย)
                  </p>
                </div>
                <div className="relative">
                  <ol>
                    <li className="relative pb-10">
                      <div
                        className="-ml-px absolute mt-0.5 top-4 left-5.5 w-0.5 h-full bg-red-400"
                        aria-hidden="true"
                      />
                      <div className="relative flex items-start group px-4">
                        <span className="h-9 flex items-center">
                          <span className="relative z-10 w-3 h-3 flex items-center justify-center bg-red-400 rounded-full" />
                        </span>
                        <span className="ml-4 sm:ml-8 flex flex-col md:flex-row justify-between">
                          <div className="flex flex-col w-40">
                            <p className="font-display text-white">
                              00 OCT 2021
                            </p>
                            <p className="font-display text-white text-sm">
                              11.00 น.
                            </p>
                          </div>
                          <p className="font-display text-white pt-2 md:pt-0 pr-2 max-w-sm">
                            เปิดรับสมัครผู้แต่งโจทย์และผู้เข้าแข่งขัน
                          </p>
                        </span>
                      </div>
                    </li>
                    <li className="relative pb-10">
                      <div
                        className="-ml-px absolute mt-0.5 top-4 left-5.5 w-0.5 h-full bg-red-400"
                        aria-hidden="true"
                      />
                      <div className="relative flex items-start group px-4">
                        <span className="h-9 flex items-center">
                          <span className="relative z-10 w-3 h-3 flex items-center justify-center bg-red-400 rounded-full" />
                        </span>
                        <span className="ml-4 sm:ml-8 flex flex-col md:flex-row justify-between">
                          <div className="flex flex-col w-40">
                            <p className="font-display text-white">
                              00 OCT 2021
                            </p>
                            <p className="font-display text-white text-sm">
                              11.00 น.
                            </p>
                          </div>
                          <p className="font-display text-white pt-2 md:pt-0 pr-2 max-w-sm">
                            ปิดรับโจทย์
                          </p>
                        </span>
                      </div>
                    </li>
                    <li className="relative pb-10">
                      <div
                        className="-ml-px absolute mt-0.5 top-4 left-5.5 w-0.5 h-full bg-red-400"
                        aria-hidden="true"
                      />
                      <div className="relative flex items-start group px-4">
                        <span className="h-9 flex items-center">
                          <span className="relative z-10 w-3 h-3 flex items-center justify-center bg-red-400 rounded-full" />
                        </span>
                        <span className="ml-4 sm:ml-8 flex flex-col md:flex-row justify-between">
                          <div className="flex flex-col w-40">
                            <p className="font-display text-white">
                              00 OCT 2021
                            </p>
                            <p className="font-display text-white text-sm">
                              11.00 น.
                            </p>
                          </div>
                          <p className="font-display text-white pt-2 md:pt-0 pr-2 max-w-sm">
                            ปิดรับสมัครผู้เข้าแข่งขัน
                          </p>
                        </span>
                      </div>
                    </li>
                    <li className="relative pb-10">
                      <div
                        className="-ml-px absolute mt-0.5 top-4 left-5.5 w-0.5 h-full bg-red-400"
                        aria-hidden="true"
                      />
                      <div className="relative flex items-start group px-4">
                        <span className="h-9 flex items-center">
                          <span className="relative z-10 w-3 h-3 flex items-center justify-center bg-red-400 rounded-full" />
                        </span>
                        <span className="ml-4 sm:ml-8 flex flex-col md:flex-row justify-between">
                          <div className="flex flex-col w-40">
                            <p className="font-display text-white">
                              00 OCT 2021
                            </p>
                            <p className="font-display text-white text-sm">
                              11.00 น.
                            </p>
                          </div>
                          <p className="font-display text-white pt-2 md:pt-0 pr-2 max-w-sm">
                            การแข่งขันวันที่ 1
                          </p>
                        </span>
                      </div>
                    </li>
                    <li className="relative pb-10">
                      <div
                        className="-ml-px absolute mt-0.5 top-4 left-5.5 w-0.5 h-full bg-red-400"
                        aria-hidden="true"
                      />
                      <div className="relative flex items-start group px-4">
                        <span className="h-9 flex items-center">
                          <span className="relative z-10 w-3 h-3 flex items-center justify-center bg-red-400 rounded-full" />
                        </span>
                        <span className="ml-4 sm:ml-8 flex flex-col md:flex-row justify-between">
                          <div className="flex flex-col w-40">
                            <p className="font-display text-white">
                              00 OCT 2021
                            </p>
                            <p className="font-display text-white text-sm">
                              11.00 น.
                            </p>
                          </div>
                          <p className="font-display text-white pt-2 md:pt-0 pr-2 max-w-sm">
                            การแข่งขันวันที่ 2
                          </p>
                        </span>
                      </div>
                    </li>
                    <li className="relative pb-8 sm:pb-16 lg:pb-24">
                      <div className="relative flex items-start group px-4">
                        <span className="h-9 flex items-center">
                          <span className="relative z-10 w-3 h-3 flex items-center justify-center bg-red-400 rounded-full" />
                        </span>
                        <span className="ml-4 sm:ml-8 flex flex-col md:flex-row justify-between">
                          <div className="flex flex-col w-40">
                            <p className="font-display text-white">
                              00 OCT 2021
                            </p>
                            <p className="font-display text-white text-sm">
                              11.00 น.
                            </p>
                          </div>
                          <p className="font-display text-white pt-2 md:pt-0 pr-2 max-w-sm">
                            ประกาศผลการคัดเลือกอย่างเป็นทางการ
                          </p>
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full pt-16 px-8 sm:px-20 md:px-32 items-center">
              <div className="flex flex-col max-w-4xl w-full">
                <p className="font-display text-3xl text-white">เกี่ยวกับเรา</p>
                <div className="w-24 h-2 bg-red-400 mt-1" aria-hidden="true" />
                <p className="font-display font-light text-white py-8">
                  พวกเราคือกลุ่มอดีตนักเรียนค่ายโอลิมปิกวิชาการคอมพิวเตอร์ที่มีความมุ่งหมายจะพัฒนาวงการโอลิมปิกวิชาการคอมพิวเตอร์
                  สาขาวิชาวิทยาการคำนวณ
                  และวิชาการด้านคอมพิวเตอร์ทั่วไปภายในประเทศไทย
                  เพื่อให้เหล่าคนรุ่นใหม่ได้มีโอกาสฝึกฝนทักษะวิธีกระบวนการคิด
                  การเขียนโปรแกรม การสร้างแบบจำลองโจทย์อย่างสร้างสรรค์
                  และการพัฒนาวิธีการในการแก้โจทย์ให้มีประสิทธิภาพมากยิ่งขึ้น
                </p>
                <p className="font-display font-light text-white py-8">
                  พวกเราคาดหวังว่า นักเรียน ครู อาจารย์
                  หรือบุคคลทั่วไปที่สนใจการเขียนโปรแกรมทุกท่าน
                  จะได้รับประโยชน์จากการเข้าร่วมการแข่งขันครั้งนี้ ไม่มากก็น้อย
                  และเราคาดหวังว่าค่ายโอลิมปิกวิชาการ สอวน. สสวท.
                  รวมถึงการแข่งขันโอลิมปิกวิชาการระดับชาติ
                  จะพัฒนาไปยังระดับต่อไป
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full py-16 px-8 sm:px-20 md:px-32 items-center">
              <div className="flex flex-col max-w-4xl w-full">
                <p className="font-display text-3xl text-white">
                  ผู้สนับสนุนหลัก
                </p>
                <div className="w-24 h-2 bg-red-400 mt-1" aria-hidden="true" />
                <div className="flex flex-col md:flex-row rounded-3xl bg-gray-700 my-8 w-full justify-around py-8 md:py-16 px-4 md:px-16 items-center">
                  <ProgLogo />
                  <ProgLogo />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Home
