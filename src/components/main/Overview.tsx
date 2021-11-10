import Link from "next/link"

export const Overview = () => (
  <section className="flex flex-col items-center w-full h-auto bg-gray-900 px-8 sm:px-16 md:px-24 lg:px-32 py-10 sm:py-18">
    <div className="flex max-w-4xl rounded-xl shadow-2xl overflow-hidden w-full">
      <div className="flex flex-col w-full h-full p-6 sm:p-10 md:p-16">
        <div className="flex flex-col gap-2">
          <p className="font-display text-3xl text-white">Overview</p>
          <div className="w-24 h-2 bg-red-400 mt-1" aria-hidden="true" />
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
              20-21 พฤศจิกายน 2021 (เสาร์-อาทิตย์) แข่งออนไลน์วันละ 3 ชั่วโมง
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
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
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
              ในการแข่งขัน ทุกคนจะได้รับโจทย์แข่งขันคอมพิวเตอร์โอลิมปิกเหมือนกัน
              3 ข้อ
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
              ขอบเขตเนื้อหาเทียบเคียงได้กับโจทย์ใน
              <Link href="https://www.facebook.com/toi.posn/" passHref={true}>
                <a className="text-red-400 hover:underline active:text-red-600">
                  การแข่งขันคอมพิวเตอร์โอลิมปิกระดับชาติ (TOI)
                </a>
              </Link>
              {" "}แต่จะไม่เกิน
              <Link href="https://ioinformatics.org/" passHref={true}>
                <a className="text-red-400 hover:underline active:text-red-600">
                  การแข่งขันคอมพิวเตอร์โอลิมปิกระหว่างประเทศ (IOI)
                </a>
              </Link>
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
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <p className="font-display text-white ml-6">
              โจทย์ทุกข้อจะใช้การเขียนอ่านข้อมูลทาง standard input (คีย์บอร์ด)
              และ standard output (หน้าจอ) เท่านั้น จะไม่มีโจทย์ประเภท
              interactive หรือ output-only โดยสามารถ
              <Link href="/scope">
                <a className="text-red-400 hover:underline hover:text-red-600">
                  อ่านข้อมูลเพิ่มเติมได้ที่ลิงค์ดังนี้
                </a>
              </Link>
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
            ผู้เข้าแข่งขันจะสามารถเห็นคะแนนของตนเองได้ทันทีที่ส่ง (Complete
            Feedback)
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
          ในโจทย์แต่ละข้อเราจะแบ่งออกเป็นปัญหาย่อย (subtasks) หลายๆ ปัญหาย่อย
          ในแต่ละปัญหาย่อยจะประกอบด้วยข้อมูลทดสอบหลายชุด
          ผู้เข้าแข่งขันจะได้คะแนนเต็มของปัญหาย่อย
          ก็ต่อเมื่อผู้เข้าแข่งขันได้คะแนนเต็มของข้อมูลทดสอบทุกชุดในปัญหาย่อยนั้นๆ
          หากมีการผิดพลาดแม้แต่ชุดทดสอบเดียว
          จะถือว่าปัญหาย่อยนั้นได้คะแนนเป็นศูนย์ กฎดังกล่าวอาจมีการเปลี่ยนแปลง
          และจะมีการแจ้งในโจทย์แต่ละข้อหากมีการคิดคะแนนที่แตกต่างออกไป (เช่น
          ไม่มีปัญหาย่อย นับคะแนนตามจำนวนชุดทดสอบ หรือ
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
)
