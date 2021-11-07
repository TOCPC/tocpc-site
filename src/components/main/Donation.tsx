import { DonationButton } from './Donation/DonationButton'
import { ArrowIcon } from './Donation/ArrowIcon'
export const Donation = () => {
  const donators = [
    { name: 'iammarkps', amount: 1600 },
    { name: 'iammarkps', amount: 1600 },
    { name: 'iammarkps', amount: 1600 },
    { name: 'iammarkps', amount: 1600 },
    { name: 'iammarkps', amount: 1600 },
    { name: 'iammarkps', amount: 1600 },
    { name: 'iammarkps', amount: 1600 },
    { name: 'iammarkps', amount: 1600 },
  ]
  return (
    <section className="flex flex-col items-center justify-center px-8 sm:px-16 md:px-24 lg:px-32 py-12 sm:py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-18 max-w-4xl">
        <div className="flex flex-col">
          <p className="font-display text-3xl">ร่วมบริจาค</p>
          <p className="py-8 font-light font-display">
            เนื่องจากเราเป็นกลุ่มผู้ไม่แสวงหาผลกำไร
            และไม่มีค่าใช้จ่ายในการเข้าร่วม
            เราจึงต้องการเงินทุนช่วยเหลือสำหรับการจัดการดูแลตัวตรวจ
            การจัดส่งรางวัล และอื่น ๆ
          </p>
          <ul className="font-light font-display list-disc list-inside">
            <li>บริจาคเกิน 150 บาท รับสติกเกอร์ TOCPC</li>
            <li>บริจาคเกิน 300 บาท รับพวงกุญแจ TOCPC</li>
            <li>บริจาคเกิน 1,000 บาท รับเสื้อยืด TOCPC</li>
          </ul>
        </div>

        <div>
          <form action="/donate">
            <p className="font-light font-display text-sm text-gray-500 mb-2">
              จำนวนเงินที่ต้องการบริจาค
            </p>
            <div className="flex mb-2 w-full gap-4">
              <DonationButton amount={150} isSelected={false} />
              <DonationButton amount={300} isSelected={false} />
              <DonationButton amount={500} isSelected={false} />
            </div>
            <div className="flex mb-2 w-full gap-4">
              <DonationButton amount={1000} isSelected={false} />
              <DonationButton amount={2000} isSelected={false} />
              {/* Validate Input? */}
              <input
                placeholder="ระบุ..."
                className="text-center font-light font-display text-gray-500 border-gray-500 w-full py-1 border rounded-md shadow-sm hover:text-white hover:bg-black"
              />
            </div>
            <p className="font-light font-display text-sm text-gray-500 mb-2">
              *ท่านต้องกรอกที่อยู่จัดส่งในหน้าถัดไปเพื่อรับเสื้อยืด TOCPC
              เป็นของที่ระลึก
            </p>

            <div className="flex   w-full gap-4">
              <input
                placeholder="ชื่อ"
                className="font-light font-display text-gray-500 border-gray-500  w-full py-1  pl-2 border rounded-md shadow-sm hover:text-white"
              />
              <input
                placeholder="สกุล"
                className="font-light font-display text-gray-500 border-gray-500  w-full py-1  pl-2 border rounded-md shadow-sm hover:text-white"
              />
            </div>
            <input
              placeholder="ชื่อที่ต้องการให้แสดงบนเว็บไซต์"
              className="my-2 font-light font-display text-gray-500 border-gray-500 w-full py-1  pl-2 border rounded-md shadow-sm hover:text-white"
            />

            <div className="flex w-full justify-between items-center mt-4 gap-4">
              <div className="flex flex-col font-light font-display text-gray-500">
                <div>
                  <input
                    type="checkbox"
                    name="hide-name"
                    id="hide-name"
                    className="mr-2 rounded-full"
                  />
                  <label htmlFor="hide-name">
                    ไม่แสดงชื่อผู้บริจาคบนเว็บไซต์
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="no-souvenir"
                    id="no-souvenir"
                    className="mr-2"
                  />
                  <label htmlFor="no-souvenir">ไม่รับของที่ระลึก</label>
                </div>
              </div>
              <button
                type="submit"
                className="bg-red-400 px-4 py-4 text-2xl font-semibold rounded-full w-1/2 text-white"
              >
                ถัดไป
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col border-black justify-center border-t border-b max-w-4xl w-full mt-16">
        <div className="flex bg-white -mt-4 w-min pl-1 pr-4">
          <p className="font-display text-2xl w-max">รายชื่อผู้ร่วมบริจาค</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4">
          {donators.map((donator, key) => {
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
        <div className="flex w-full justify-center items-center">
          <button>
            <div className="flex justify-center items-center gap-2 bg-white -mb-3 w-min px-4">
              <ArrowIcon />
              <p className="font-display  w-max">ดูเพิ่มเติม</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
