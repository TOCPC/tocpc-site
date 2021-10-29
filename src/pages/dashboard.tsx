import { useAuth } from 'lib/auth'

const Dashboard = () => {
  const auth = useAuth()
  return (
    <main className="relative w-full min-h-screen bg-gray-900">
      <div className="absolute right-full bg-red-400 w-20 h-full transform translate-x-2 sm:translate-x-10 md:translate-x-20 z-10"></div>
      <div className="flex flex-col items-center px-10 sm:px-16 md:px-24">
        <div className="flex flex-col mt-28 sm:mt-32 mb-20 max-w-2xl divide-y divide-white w-full font-display border-b border-white">
          <div className="flex justify-between py-6 items-center">
            <div className="flex flex-col">
              <p className="font-semibold text-white">ข้อมูลผู้เข้าแข่งขัน</p>
              <p className="text-white">Personal details</p>
            </div>
            <button className="bg-red-400 py-3 px-4 text-white font-bold rounded-3xl">
              เข้าสู่การแข่งขัน
            </button>
          </div>
          <div className="flex w-full py-6">
            <p className="w-1/3 text-white font-semibold">ชื่อผู้ใช้</p>
            <p className="w-2/3 text-white">{auth?.userData?.username}</p>
          </div>
          <div className="flex w-full py-6">
            <p className="w-1/3 text-white font-semibold">ชื่อ-สกุล</p>
            <p className="w-2/3 text-white">
              {auth?.userData?.firstname} {auth?.userData?.lastname}
            </p>
          </div>
          <div className="flex w-full py-6">
            <p className="w-1/3 text-white font-semibold">อีเมล</p>
            <p className="w-2/3 text-white overflow-x-scroll">
              {auth?.userData?.email}
            </p>
          </div>
          <div className="flex w-full py-6">
            <p className="w-1/3 text-white font-semibold">
              เบอร์โทรศัพท์สำหรับติดต่อ
            </p>
            <p className="w-2/3 text-white">{auth?.userData?.tel}</p>
          </div>
          <div className="flex w-full py-6">
            <p className="w-1/3 text-white font-semibold">
              ที่อยู่สำหรับส่งของรางวัล
            </p>
            <p className="w-2/3 text-white">{auth?.userData?.address}</p>
          </div>
          <div className="flex w-full py-6">
            <p className="w-1/3 text-white font-semibold">ขนาดเสื้อ</p>
            <p className="w-2/3 text-white">{auth?.userData?.size}</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
