import { Description } from 'components/Description'
import { useRouter } from 'next/router'
import Image from 'next/image'
import promptpay_qr from '../../public/img/promptpay-qr.jpg'
const Donate = () => {
  const router = useRouter()

  return (
    <>
      <Description />
      <main className="relative w-full min-h-screen bg-gray-900">
        <div className="flex flex-col">
          <div className="flex flex-col items-center px-8 sm:px-40 mt-28 sm:mt-26">
            {/* TODO: */}
            <p
              className="font-display text-white cursor-pointer absolute"
              onClick={() => router.back()}
            >
              ย้อนกลับ
            </p>
            <div className="max-w-sm w-full">
              <p className="text-3xl font-extrabold text-left text-white font-display border-b py-4 w-full">
                บริจาค{' '}
                {router.query.amount
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                บาท
              </p>
              <div className="grid grid-cols-2 gap-6 py-6 border-b w-full ">
                <p className="text-left text-white font-display w-full">
                  ชื่อผู้บริจาค
                  <br />
                  ที่จะแสดงบนเว็บไซต์
                </p>
                <p className="text-left text-white font-display w-full my-auto">
                  {router.query.displayName}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 py-6 border-b w-full ">
                <p className="text-left text-white font-display w-full">
                  ชื่อ-สกุล
                </p>
                <p className="text-left text-white font-display w-full my-auto">
                  {`${router.query.name} ${router.query.surname}`}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 py-6 border-b w-full ">
                <p className="text-left text-white font-display w-full">
                  ของที่ระลึกที่จะได้รับ
                </p>
                <p className="text-left text-white font-display w-full"></p>
              </div>
              <div className="w-full">
                <p className="text-left  py-6 text-white font-display w-full">
                  โอนเงินเข้าบัญชี
                </p>

                <div className="rounded-lg overflow-hidden flex justify-center p-0">
                  <Image
                    className="mx-auto"
                    src={promptpay_qr}
                    placeholder="blur"
                    alt="prompt pay qr-code"
                  />
                </div>
              </div>
              <div className="w-full">
                <p className="text-left  py-6 text-white font-display w-full  font-bold">
                  หลักฐานการโอนเงิน
                </p>

                <div className="text-white rounded-xl overflow-hidden border-separate h-96 p-16 border-dashed border-white border-2">
                  <input type="file" name="" id="" className="text-white " />
                </div>
              </div>
              <button className="bg-red-400 px-8 py-2  w-full font-display my-6 font-semibold rounded-full text-white">
                บริจาค
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-sm text-white"></div>
      </main>
    </>
  )
}

export default Donate
