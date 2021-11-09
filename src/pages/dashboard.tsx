import { useAuth } from 'lib/auth'

import { MetaData } from 'components/Meta'

const Dashboard = () => {
  const auth = useAuth()
  return (
    <>
      <MetaData />
      <main className="relative w-full min-h-screen bg-gray-900">
        <div className="flex flex-col items-center px-10 sm:px-16 md:px-24">
          <div className="flex flex-col w-full max-w-2xl mb-20 border-b border-white divide-y divide-white mt-28 sm:mt-32 font-display">
            <div className="flex items-center justify-between py-6">
              <div className="flex flex-col">
                <p className="font-semibold text-white">ข้อมูลผู้เข้าแข่งขัน</p>
                <p className="text-white">Personal details</p>
              </div>
              <button
                className="px-4 py-3 font-bold text-white bg-red-400 rounded-3xl cursor-not-allowed"
                disabled
              >
                เข้าสู่การแข่งขัน
              </button>
            </div>
            <div className="flex w-full py-6">
              <p className="w-1/3 font-semibold text-white">ชื่อผู้ใช้</p>
              <p className="w-2/3 pl-4 text-white">
                {auth?.userData?.username ?? '-'}
              </p>
            </div>
            {auth?.userData?.anonymous ? (
              <div className="flex w-full py-6">
                <p className="text-white">
                  <b>เข้าร่วมแบบไม่เปิดเผยตัวตน</b>{' '}
                  ไม่มีการแสดงคะแนนต่อสาธารณะในระหว่างการแข่ง
                  รวมถึงไม่นำไปคิดคะแนนแข่งขัน และไม่ได้รับของรางวัล
                </p>
              </div>
            ) : (
              <>
                <div className="flex w-full py-6">
                  <p className="w-1/3 overflow-x-auto font-semibold text-white">
                    ชื่อ-สกุล
                  </p>
                  <p className="w-2/3 pl-4 text-white">
                    {auth?.userData?.firstname} {auth?.userData?.lastname}
                  </p>
                </div>
                <div className="flex w-full py-6">
                  <p className="w-1/3 font-semibold text-white">อีเมล</p>
                  <p className="w-2/3 pl-4 overflow-x-auto text-white">
                    {auth?.userData?.email}
                  </p>
                </div>
                <div className="flex w-full py-6">
                  <p className="w-1/3 font-semibold text-white">
                    เบอร์โทรศัพท์สำหรับติดต่อ
                  </p>
                  <p className="w-2/3 pl-4 text-white">{auth?.userData?.tel}</p>
                </div>
                <div className="flex w-full py-6">
                  <p className="w-1/3 font-semibold text-white">
                    ที่อยู่สำหรับส่งของรางวัล
                  </p>
                  <p className="w-2/3 pl-4 overflow-x-auto text-white">
                    {auth?.userData?.address}
                  </p>
                </div>
                <div className="flex w-full py-6">
                  <p className="w-1/3 font-semibold text-white">ขนาดเสื้อ</p>
                  <p className="w-2/3 pl-4 text-white">
                    {auth?.userData?.size}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default Dashboard
