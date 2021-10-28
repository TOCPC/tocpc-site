import { MainFootage } from 'components/footage'

export const THACO = () => (
  <section className="w-full h-screen bg-gray-800 relative overflow-hidden">
    <div className="block absolute h-full w-full">
      <div className="relative h-full max-w-7xl">
        <MainFootage />
      </div>
    </div>
    <div className="block absolute h-full w-full">
      <div className="flex flex-col w-full h-screen items-center justify-center">
        <div>
          <p className="font-display py-1 font-extrabold text-4xl sm:text-5xl text-white text-center">
            Thailand
          </p>
          <p className="font-display py-1 font-extrabold text-4xl sm:text-5xl text-white text-center">
            Online
          </p>
          <p className="font-display py-1 font-extrabold text-4xl sm:text-5xl text-white text-center">
            Competitive
          </p>
          <p className="font-display py-1 font-extrabold text-4xl sm:text-5xl text-white text-center">
            Programming
          </p>
          <p className="font-display py-1 font-extrabold text-4xl sm:text-5xl text-white text-center">
            Contest
          </p>
          <p className="font-display py-1 font-extrabold text-4xl sm:text-5xl text-white text-center">
            2021
          </p>
          <p className="font-display py-6 text-white text-center">
            20-21 NOV 2021
          </p>
        </div>
        <div className="pt-6">
          <button className="bg-red-400 px-8 py-4 sm:px-10 sm:py-6 text-white text-2xl font-semibold rounded-full">
            Register
          </button>
          <p className="font-display py-4 text-white text-center">
            until 19 NOV 2021
          </p>
        </div>
      </div>
    </div>
  </section>
)
