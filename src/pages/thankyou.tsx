import { MetaData } from 'components/Meta'
import type { NextPage } from 'next'

const ThankYou: NextPage = () => {
  return (
    <>
      <MetaData />
      <section className="relative flex items-center justify- w-full h-screen overflow-hidden bg-gray-900">
        <div className="absolute w-full">
          <h1 className="text-red-400 text-center font-display text-4xl sm:text-6xl font-bold py-1">
            หมดเวลารับสมัคร
          </h1>
          <p className="text-white text-center text-lg sm:text-xl font-display py-4">
            ขอบคุณทุกท่านที่ให้ความสนใจเสมอมา
          </p>
        </div>
      </section>
    </>
  )
}

export default ThankYou
