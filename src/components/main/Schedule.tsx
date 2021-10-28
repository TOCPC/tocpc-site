import { ProgLogo } from 'components/ProgLogo'

export const Schedule = () => (
  <section className="flex flex-col items-center justify-center w-full bg-gray-900">
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
        <div className="flex flex-col items-center bg-gray-900 -mt-5 px-1 md:px-4 pb-8 sm:pb-16 lg:pb-24 max-w-xl">
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
                    <p className="font-display text-white">00 OCT 2021</p>
                    <p className="font-display text-white text-sm">11.00 น.</p>
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
                    <p className="font-display text-white">00 OCT 2021</p>
                    <p className="font-display text-white text-sm">11.00 น.</p>
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
                    <p className="font-display text-white">00 OCT 2021</p>
                    <p className="font-display text-white text-sm">11.00 น.</p>
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
                    <p className="font-display text-white">00 OCT 2021</p>
                    <p className="font-display text-white text-sm">11.00 น.</p>
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
                    <p className="font-display text-white">00 OCT 2021</p>
                    <p className="font-display text-white text-sm">11.00 น.</p>
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
                    <p className="font-display text-white">00 OCT 2021</p>
                    <p className="font-display text-white text-sm">11.00 น.</p>
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
          สาขาวิชาวิทยาการคำนวณ และวิชาการด้านคอมพิวเตอร์ทั่วไปภายในประเทศไทย
          เพื่อให้เหล่าคนรุ่นใหม่ได้มีโอกาสฝึกฝนทักษะวิธีกระบวนการคิด
          การเขียนโปรแกรม การสร้างแบบจำลองโจทย์อย่างสร้างสรรค์
          และการพัฒนาวิธีการในการแก้โจทย์ให้มีประสิทธิภาพมากยิ่งขึ้น
        </p>
        <p className="font-display font-light text-white py-8">
          พวกเราคาดหวังว่า นักเรียน ครู อาจารย์
          หรือบุคคลทั่วไปที่สนใจการเขียนโปรแกรมทุกท่าน
          จะได้รับประโยชน์จากการเข้าร่วมการแข่งขันครั้งนี้ ไม่มากก็น้อย
          และเราคาดหวังว่าค่ายโอลิมปิกวิชาการ สอวน. สสวท.
          รวมถึงการแข่งขันโอลิมปิกวิชาการระดับชาติ จะพัฒนาไปยังระดับต่อไป
        </p>
      </div>
    </div>
    <div className="flex flex-col w-full py-16 px-8 sm:px-20 md:px-32 items-center">
      <div className="flex flex-col max-w-4xl w-full">
        <p className="font-display text-3xl text-white">ผู้สนับสนุนหลัก</p>
        <div className="w-24 h-2 bg-red-400 mt-1" aria-hidden="true" />
        <div className="flex flex-col md:flex-row rounded-3xl bg-gray-700 my-8 w-full justify-around py-8 md:py-16 px-4 md:px-16 items-center">
          <ProgLogo />
          <ProgLogo />
        </div>
      </div>
    </div>
  </section>
)
