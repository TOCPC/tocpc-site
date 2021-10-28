export const Donation = () => (
  <section className="flex flex-col items-center justify-center px-8 sm:px-20 md:px-32 py-12 sm:py-24 md:py-32">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-18 max-w-4xl">
      <div className="flex flex-col">
        <p className="font-display font-semibold text-2xl">ร่วมบริจาค</p>
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
        <p className="font-display text-2xl w-max">รายชื่อผู้ร่วมบริจาค</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4">
        <div className="flex flex-col items-center justify-center py-4 md:py-8">
          <p className="font-display font-semibold">iammarkps</p>
          <p className="font-display font-semibold text-red-400">1600฿</p>
        </div>
        <div className="flex flex-col items-center justify-center py-4 md:py-8">
          <p className="font-display font-semibold">iammarkps</p>
          <p className="font-display font-semibold text-red-400">1600฿</p>
        </div>
        <div className="flex flex-col items-center justify-center py-4 md:py-8">
          <p className="font-display font-semibold">iammarkps</p>
          <p className="font-display font-semibold text-red-400">1600฿</p>
        </div>
        <div className="flex flex-col items-center justify-center py-4 md:py-8">
          <p className="font-display font-semibold">iammarkps</p>
          <p className="font-display font-semibold text-red-400">1600฿</p>
        </div>
        <div className="flex flex-col items-center justify-center py-4 md:py-8">
          <p className="font-display font-semibold">iammarkps</p>
          <p className="font-display font-semibold text-red-400">1600฿</p>
        </div>
        <div className="flex flex-col items-center justify-center py-4 md:py-8">
          <p className="font-display font-semibold">iammarkps</p>
          <p className="font-display font-semibold text-red-400">1600฿</p>
        </div>
        <div className="flex flex-col items-center justify-center py-4 md:py-8">
          <p className="font-display font-semibold">iammarkps</p>
          <p className="font-display font-semibold text-red-400">1600฿</p>
        </div>
        <div className="flex flex-col items-center justify-center py-4 md:py-8">
          <p className="font-display font-semibold">iammarkps</p>
          <p className="font-display font-semibold text-red-400">1600฿</p>
        </div>
      </div>
    </div>
  </section>
)
