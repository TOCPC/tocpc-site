import { ProgLogo } from 'components/ProgLogo'

export const Schedule = () => (
  <section className="flex flex-col items-center justify-center w-full bg-gray-900">
    <div className="flex items-center justify-center py-48">
      <div className="flex flex-col">
        <p className="text-xl text-right text-white font-display sm:text-2xl">
          สมัครแล้ว
        </p>
        <p className="text-xl text-right text-white font-display sm:text-2xl">
          กว่า
        </p>
      </div>
      <p className="px-4 text-6xl font-bold text-red-400 font-display sm:text-8xl">
        0
      </p>
      <p className="text-3xl font-medium text-white font-display sm:text-5xl">
        คน
      </p>
    </div>
    <div className="flex items-center justify-center w-full px-6 pb-12 sm:px-20 md:px-32">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl border border-red-400 rounded-3xl">
        <div className="flex flex-col items-center max-w-xl px-1 pb-8 -mt-5 bg-gray-900 md:px-4 sm:pb-16 lg:pb-24">
          <p className="text-sm font-semibold text-red-400 font-display sm:text-md">
            กำหนดการ
          </p>
          <p className="text-sm text-center text-red-400 font-display sm:text-md">
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
              <div className="relative flex items-start px-4 group">
                <span className="flex items-center h-9">
                  <span className="relative z-10 flex items-center justify-center w-3 h-3 bg-red-400 rounded-full" />
                </span>
                <span className="flex flex-col justify-between ml-4 sm:ml-8 md:flex-row">
                  <div className="flex flex-col w-40">
                    <p className="text-white font-display">08 NOV 2021</p>
                    <p className="text-sm text-white font-display">00.00 น.</p>
                  </div>
                  <p className="max-w-sm pt-2 pr-2 text-white font-display md:pt-0">
                    เปิดรับสมัครผู้เข้าแข่งขัน
                  </p>
                </span>
              </div>
            </li>

            <li className="relative pb-10">
              <div
                className="-ml-px absolute mt-0.5 top-4 left-5.5 w-0.5 h-full bg-red-400"
                aria-hidden="true"
              />
              <div className="relative flex items-start px-4 group">
                <span className="flex items-center h-9">
                  <span className="relative z-10 flex items-center justify-center w-3 h-3 bg-red-400 rounded-full" />
                </span>
                <span className="flex flex-col justify-between ml-4 sm:ml-8 md:flex-row">
                  <div className="flex flex-col w-40">
                    <p className="text-white font-display">19 NOV 2021</p>
                    <p className="text-sm text-white font-display">00.00 น.</p>
                  </div>
                  <p className="max-w-sm pt-2 pr-2 text-white font-display md:pt-0">
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
              <div className="relative flex items-start px-4 group">
                <span className="flex items-center h-9">
                  <span className="relative z-10 flex items-center justify-center w-3 h-3 bg-red-400 rounded-full" />
                </span>
                <span className="flex flex-col justify-between ml-4 sm:ml-8 md:flex-row">
                  <div className="flex flex-col w-40">
                    <p className="text-white font-display">20 NOV 2021</p>
                    <p className="text-sm text-white font-display">19.00 น.</p>
                  </div>
                  <p className="max-w-sm pt-2 pr-2 text-white font-display md:pt-0">
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
              <div className="relative flex items-start px-4 group">
                <span className="flex items-center h-9">
                  <span className="relative z-10 flex items-center justify-center w-3 h-3 bg-red-400 rounded-full" />
                </span>
                <span className="flex flex-col justify-between ml-4 sm:ml-8 md:flex-row">
                  <div className="flex flex-col w-40">
                    <p className="text-white font-display">21 NOV 2021</p>
                    <p className="text-sm text-white font-display">19.00 น.</p>
                  </div>
                  <p className="max-w-sm pt-2 pr-2 text-white font-display md:pt-0">
                    การแข่งขันวันที่ 2
                  </p>
                </span>
              </div>
            </li>
            <li className="relative pb-8 sm:pb-16 lg:pb-24">
              <div className="relative flex items-start px-4 group">
                <span className="flex items-center h-9">
                  <span className="relative z-10 flex items-center justify-center w-3 h-3 bg-red-400 rounded-full" />
                </span>
                <span className="flex flex-col justify-between ml-4 sm:ml-8 md:flex-row">
                  <div className="flex flex-col w-40">
                    <p className="text-white font-display">28 NOV 2021</p>
                    <p className="text-sm text-white font-display">00.00 น.</p>
                  </div>
                  <p className="max-w-sm pt-2 pr-2 text-white font-display md:pt-0">
                    ประกาศผลการแข่งขันอย่างเป็นทางการ
                  </p>
                </span>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center w-full px-8 pt-16 sm:px-20 md:px-32">
      <div className="flex flex-col w-full max-w-4xl">
        <p className="text-3xl text-white font-display">เกี่ยวกับเรา</p>
        <div className="w-24 h-2 mt-1 bg-red-400" aria-hidden="true" />
        <p className="py-8 font-light text-white font-display">
          พวกเราคือกลุ่มอดีตนักเรียนค่ายโอลิมปิกวิชาการคอมพิวเตอร์ที่มีความมุ่งหมายจะพัฒนาวงการโอลิมปิกวิชาการคอมพิวเตอร์
          สาขาวิชาวิทยาการคำนวณ และวิชาการด้านคอมพิวเตอร์ทั่วไปภายในประเทศไทย
          เพื่อให้เหล่าคนรุ่นใหม่ได้มีโอกาสฝึกฝนทักษะวิธีกระบวนการคิด
          การเขียนโปรแกรม การสร้างแบบจำลองโจทย์อย่างสร้างสรรค์
          และการพัฒนาวิธีการในการแก้โจทย์ให้มีประสิทธิภาพมากยิ่งขึ้น
        </p>
        <p className="py-8 font-light text-white font-display">
          พวกเราคาดหวังว่า นักเรียน ครู อาจารย์
          หรือบุคคลทั่วไปที่สนใจการเขียนโปรแกรมทุกท่าน
          จะได้รับประโยชน์จากการเข้าร่วมการแข่งขันครั้งนี้ ไม่มากก็น้อย
          และเราคาดหวังว่าค่ายโอลิมปิกวิชาการ สอวน. สสวท.
          รวมถึงการแข่งขันโอลิมปิกวิชาการระดับชาติ จะพัฒนาไปยังระดับต่อไป
        </p>
      </div>
    </div>
    <div className="flex flex-col items-center w-full px-8 py-16 sm:px-20 md:px-32">
      <div className="flex flex-col w-full max-w-4xl">
        <p className="text-3xl text-white font-display">ผู้สนับสนุนหลัก</p>
        <div className="w-24 h-2 mt-1 bg-red-400" aria-hidden="true" />
        <div className="flex flex-col items-center justify-around w-full px-4 py-8 my-8 bg-gray-700 lg:flex-row rounded-3xl lg:py-16 lg:px-16">
          <ProgLogo />
          <ProgLogo />
        </div>
      </div>
    </div>
  </section>
)
