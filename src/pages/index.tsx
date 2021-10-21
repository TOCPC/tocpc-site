import type { NextPage } from 'next'
import Head from 'next/head'
import { MainFootage } from 'components/footage'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
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
            <div className="flex flex-col w-full h-screen items-center justify-center">
              <div>
                <p className="py-1 font-extrabold text-5xl text-white text-center">
                  Thailand
                </p>
                <p className="py-1 font-extrabold text-5xl text-white text-center">
                  Online
                </p>
                <p className="py-1 font-extrabold text-5xl text-white text-center">
                  Competitive
                </p>
                <p className="py-1 font-extrabold text-5xl text-white text-center">
                  Programming
                </p>
                <p className="py-1 font-extrabold text-5xl text-white text-center">
                  Contest
                </p>
                <p className="py-1 font-extrabold text-5xl text-white text-center">
                  2021
                </p>
                <p className="py-6 text-white text-center">20-21 NOV 2021</p>
              </div>
              <div className="pt-6">
                <button className="bg-red-400 px-10 py-6 text-white text-2xl font-semibold rounded-full">
                  Register
                </button>
                <p className="py-4 text-white text-center">until 19 NOV 2021</p>
              </div>
            </div>
          </section>
          <section className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-24 w-full h-auto bg-gray-900 px-24 md:px-48 py-36">
            <div className="flex flex-col">
              <div className="bg-red-400 rounded-lg p-2 w-min">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <p className="text-white font-bold text-2xl py-6">ห้ามพลาด</p>
              <p className="text-white py-2">
                การแข่งขันจะจัดขึ้นในวันเสาร์ที่ 20 และวันอาทิตย์ที่ 21
                ของเดือนพฤศจิกายน พ.ศ.2564 สามารถดูกำหนดการเพิ่มเติมได้ที่นี่
              </p>
              <p className="text-white font-bold text-xl py-4 underline">
                กำหนดการ
              </p>
            </div>
            <div className="flex flex-col">
              <div className="bg-red-400 rounded-lg p-2 w-min">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <p className="text-white font-bold text-2xl py-6">
                ต้องการแต่งโจทย์?
              </p>
              <p className="text-white py-2">
                เราพร้อมให้ทุกคนมีส่วนร่วมในการแต่งโจทย์ หากต้องการร่วมงานกับเรา
                สามารถศึกษากระบวนการแต่งโจทย์และการส่งโจทย์ได้ตามนี้
              </p>
              <p className="text-white font-bold text-xl py-4 underline">
                กระบวนการแต่งโจทย์
              </p>
            </div>
            <div className="flex flex-col">
              <div className="bg-red-400 rounded-lg p-2 w-min">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <p className="text-white font-bold text-2xl py-6">
                รูปแบบการแข่งขัน
              </p>
              <p className="text-white py-2">
                การแข่งขันยาวรอบละ 3 ชั่วโมง จัดขึ้น 2 รอบ
                โดยมีโจทย์การแข่งขันรอบละ 3 ข้อ
                สามารถดูรายละเอียดโจทย์แต่ละข้อและขอบเขตเนื้อหาที่ใช้ในการแข่งขันได้ที่นี่
              </p>
              <p className="text-white font-bold text-xl py-4 underline">
                รูปแบบการแข่งขัน
              </p>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center p-12 sm:p-24 md:p-32 lg:p-48">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-18 max-w-4xl">
              <div className="flex flex-col">
                <p className="font-semibold text-2xl">ร่วมบริจาค</p>
                <p className="font-thin text-2xl pt-10">
                  เนื่องจากเราเป็นกลุ่มผู้ไม่แสวงหาผลกำไร
                  และไม่มีค่าใช้จ่ายในการเข้าร่วม
                  เราจึงต้องการเงินทุนช่วยเหลือสำหรับการจัดการดูแลตัวตรวจ
                  การจัดส่งรางวัล และอื่น ๆ
                </p>
              </div>
              <div>
                <div className="flex">
                  <div className="p-2 w-1/2">
                    <button className="bg-gray-200 px-4 py-6 text-2xl font-semibold rounded-full w-full" />
                  </div>
                  <div className="p-2 w-1/2">
                    <button className="bg-gray-200 px-4 py-6 text-2xl font-semibold rounded-full w-full" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="bg-gray-200 px-4 py-6 text-2xl font-semibold rounded-full w-full" />
                </div>
                <div className="p-2 w-full">
                  <button className="bg-gray-200 px-4 py-6 text-2xl font-semibold rounded-full w-full" />
                </div>
                <div className="p-2 w-full">
                  <button className="bg-gray-200 px-4 py-6 text-2xl font-semibold rounded-full w-full" />
                </div>
                <div className="p-2 w-full flex flex-row-reverse">
                  <button className="bg-red-400 px-4 py-4 text-2xl font-semibold rounded-full w-1/2 text-white">
                    Donate
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col border-black justify-center border-t border-b max-w-4xl w-full mt-16">
              <div className="flex bg-white -mt-4 w-min pl-1 pr-4">
                <p className="text-2xl w-max">รายชื่อผู้ร่วมบริจาค</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4">
                <div className="flex flex-col items-center justify-center py-4 md:py-8">
                  <p className="font-semibold">iammarkps</p>
                  <p className="font-semibold text-red-400">1600฿</p>
                </div>
                <div className="flex flex-col items-center justify-center py-4 md:py-8">
                  <p className="font-semibold">iammarkps</p>
                  <p className="font-semibold text-red-400">1600฿</p>
                </div>
                <div className="flex flex-col items-center justify-center py-4 md:py-8">
                  <p className="font-semibold">iammarkps</p>
                  <p className="font-semibold text-red-400">1600฿</p>
                </div>
                <div className="flex flex-col items-center justify-center py-4 md:py-8">
                  <p className="font-semibold">iammarkps</p>
                  <p className="font-semibold text-red-400">1600฿</p>
                </div>
                <div className="flex flex-col items-center justify-center py-4 md:py-8">
                  <p className="font-semibold">iammarkps</p>
                  <p className="font-semibold text-red-400">1600฿</p>
                </div>
                <div className="flex flex-col items-center justify-center py-4 md:py-8">
                  <p className="font-semibold">iammarkps</p>
                  <p className="font-semibold text-red-400">1600฿</p>
                </div>
                <div className="flex flex-col items-center justify-center py-4 md:py-8">
                  <p className="font-semibold">iammarkps</p>
                  <p className="font-semibold text-red-400">1600฿</p>
                </div>
                <div className="flex flex-col items-center justify-center py-4 md:py-8">
                  <p className="font-semibold">iammarkps</p>
                  <p className="font-semibold text-red-400">1600฿</p>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center w-full bg-gray-800">
            <div className="flex py-36 items-center justify-center">
              <div className="flex flex-col">
                <p className="text-xl sm:text-2xl text-white text-right">
                  สมัครแล้ว
                </p>
                <p className="text-xl sm:text-2xl text-white text-right">
                  กว่า
                </p>
              </div>
              <p className="text-6xl sm:text-8xl text-red-400 font-extrabold px-4">
                400
              </p>
              <p className="text-3xl sm:text-5xl text-white font-medium">คน</p>
            </div>
            <div className="px-8 sm:px-20 md:px-32 w-full flex items-center justify-center pb-12">
              <div className="flex flex-col justify-center items-center border border-red-400 max-w-4xl w-full rounded-3xl">
                <div className="flex flex-col items-center bg-gray-800 -mt-5 px-1 md:px-4 mb-24 max-w-xl">
                  <p className="text-red-400 font-semibold text-sm sm:text-md">
                    กำหนดการ
                  </p>
                  <p className="text-red-400 text-sm sm:text-md text-center">
                    GMT+7 (เวลามาตรฐานประเทศไทย)
                  </p>
                </div>
                <div className="relative">
                  <ol>
                    <li className="relative pb-10">
                      <div
                        className="-ml-px absolute mt-0.5 top-4 left-7 w-0.5 h-full bg-red-400"
                        aria-hidden="true"
                      />
                      <div className="relative flex items-start group px-4">
                        <span className="h-9 flex items-center">
                          <span className="relative z-10 w-6 h-6 flex items-center justify-center bg-red-400 rounded-full" />
                        </span>
                        <span className="ml-4 sm:ml-8 flex flex-col md:flex-row justify-between">
                          <div className="flex flex-col w-40">
                            <p className="text-white">00 OCT 2021</p>
                            <p className="text-white text-sm">11.00 น.</p>
                          </div>
                          <p className="text-white pt-2 md:pt-0 pr-2 max-w-sm">
                            เปิดรับสมัครผู้แต่งโจทย์และผู้เข้าแข่งขัน
                          </p>
                        </span>
                      </div>
                    </li>
                    <li className="relative pb-10">
                      <div
                        className="-ml-px absolute mt-0.5 top-4 left-7 w-0.5 h-full bg-red-400"
                        aria-hidden="true"
                      />
                      <div className="relative flex items-start group px-4">
                        <span className="h-9 flex items-center">
                          <span className="relative z-10 w-6 h-6 flex items-center justify-center bg-red-400 rounded-full" />
                        </span>
                        <span className="ml-4 sm:ml-8 flex flex-col md:flex-row justify-between">
                          <div className="flex flex-col w-40">
                            <p className="text-white">00 OCT 2021</p>
                            <p className="text-white text-sm">11.00 น.</p>
                          </div>
                          <p className="text-white pt-2 md:pt-0 pr-2 max-w-sm">
                            ปิดรับโจทย์
                          </p>
                        </span>
                      </div>
                    </li>
                    <li className="relative pb-10">
                      <div
                        className="-ml-px absolute mt-0.5 top-4 left-7 w-0.5 h-full bg-red-400"
                        aria-hidden="true"
                      />
                      <div className="relative flex items-start group px-4">
                        <span className="h-9 flex items-center">
                          <span className="relative z-10 w-6 h-6 flex items-center justify-center bg-red-400 rounded-full" />
                        </span>
                        <span className="ml-4 sm:ml-8 flex flex-col md:flex-row justify-between">
                          <div className="flex flex-col w-40">
                            <p className="text-white">00 OCT 2021</p>
                            <p className="text-white text-sm">11.00 น.</p>
                          </div>
                          <p className="text-white pt-2 md:pt-0 pr-2 max-w-sm">
                            ปิดรับสมัครผู้เข้าแข่งขัน
                          </p>
                        </span>
                      </div>
                    </li>
                    <li className="relative pb-10">
                      <div
                        className="-ml-px absolute mt-0.5 top-4 left-7 w-0.5 h-full bg-red-400"
                        aria-hidden="true"
                      />
                      <div className="relative flex items-start group px-4">
                        <span className="h-9 flex items-center">
                          <span className="relative z-10 w-6 h-6 flex items-center justify-center bg-red-400 rounded-full" />
                        </span>
                        <span className="ml-4 sm:ml-8 flex flex-col md:flex-row justify-between">
                          <div className="flex flex-col w-40">
                            <p className="text-white">00 OCT 2021</p>
                            <p className="text-white text-sm">11.00 น.</p>
                          </div>
                          <p className="text-white pt-2 md:pt-0 pr-2 max-w-sm">
                            การแข่งขันวันที่ 1
                          </p>
                        </span>
                      </div>
                    </li>
                    <li className="relative pb-10">
                      <div
                        className="-ml-px absolute mt-0.5 top-4 left-7 w-0.5 h-full bg-red-400"
                        aria-hidden="true"
                      />
                      <div className="relative flex items-start group px-4">
                        <span className="h-9 flex items-center">
                          <span className="relative z-10 w-6 h-6 flex items-center justify-center bg-red-400 rounded-full" />
                        </span>
                        <span className="ml-4 sm:ml-8 flex flex-col md:flex-row justify-between">
                          <div className="flex flex-col w-40">
                            <p className="text-white">00 OCT 2021</p>
                            <p className="text-white text-sm">11.00 น.</p>
                          </div>
                          <p className="text-white pt-2 md:pt-0 pr-2 max-w-sm">
                            การแข่งขันวันที่ 2
                          </p>
                        </span>
                      </div>
                    </li>
                    <li className="relative pb-24">
                      <div className="relative flex items-start group px-4">
                        <span className="h-9 flex items-center">
                          <span className="relative z-10 w-6 h-6 flex items-center justify-center bg-red-400 rounded-full" />
                        </span>
                        <span className="ml-4 sm:ml-8 flex flex-col md:flex-row justify-between">
                          <div className="flex flex-col w-40">
                            <p className="text-white">00 OCT 2021</p>
                            <p className="text-white text-sm">11.00 น.</p>
                          </div>
                          <p className="text-white pt-2 md:pt-0 pr-2 max-w-sm">
                            ประกาศผลการคัดเลือกอย่างเป็นทางการ
                          </p>
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}

export default Home
