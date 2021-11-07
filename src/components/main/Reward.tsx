import Image from 'next/image'
import watch from '../../../public/img/apple_watch.png'
import watch_logo from '../../../public/img/apple_watch_logo.png'
import discord from '../../../public/img/discord_nitro.png'
import airtag from '../../../public/img/airtag.png'
import first_reward from '../../../public/img/1st_reward.png'
import second_reward from '../../../public/img/2nd_reward.png'
import third_reward from '../../../public/img/3rd_reward.png'
import fourth_reward from '../../../public/img/4th_reward.png'

export const Reward = () => (
  <section className="flex items-center justify-center w-full px-8 sm:px-16 md:px-24 lg:px-32">
    <div className="flex flex-col max-w-4xl w-full font-display">
      <div className="flex flex-col my-12">
        <div className="flex flex-col my-2">
          <p className="text-red-400 font-bold">ของรางวัลสำหรับผู้ที่ได้</p>
          <p className="font-bold text-3xl">คะแนนสูงสุดอันดับ 1</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-cetner justify-center mb-8 md:mb-0 md:m-4 md:ml-0 shadow-lg h-96 rounded-2xl w-full">
            <div className="flex flex-col items-center justify-center">
              <span>
                <Image
                  src={watch}
                  alt=""
                  width={179}
                  height={196}
                  placeholder="blur"
                />
              </span>
              <span className="mt-4">
                <Image
                  src={watch_logo}
                  alt=""
                  width={145}
                  height={55.2}
                  placeholder="blur"
                />
              </span>
            </div>
          </div>
          <div className="relative md:m-4 md:mr-0 shadow-lg h-96 rounded-2xl w-full">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <span className="p-6">
                <Image
                  src={first_reward}
                  alt=""
                  width={284}
                  height={188}
                  placeholder="blur"
                />
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 w-full">
              <div className="flex justify-center w-full my-5">
                <p className="text-gray-400">
                  เสื้อยืด พวงกุญแจ สติกเกอร์ ประกาศนียบัตร
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-12">
        <div className="flex flex-col my-2">
          <p className="text-red-400 font-bold">ของรางวัลสำหรับผู้ที่ได้</p>
          <p className="font-bold text-3xl">คะแนนสูงสุดอันดับ 2</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-cetner justify-center mb-8 md:mb-0 md:m-4 md:ml-0 shadow-lg h-96 rounded-2xl w-full">
            <div className="flex flex-col items-center justify-center">
              <span className="p-6">
                <Image
                  src={discord}
                  alt=""
                  width={277}
                  height={198}
                  placeholder="blur"
                />
              </span>
            </div>
          </div>
          <div className="relative md:m-4 md:mr-0 shadow-lg h-96 rounded-2xl w-full">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <span className="p-6">
                <Image
                  src={first_reward}
                  alt=""
                  width={284}
                  height={188}
                  placeholder="blur"
                />
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 w-full">
              <div className="flex justify-center w-full my-5">
                <p className="text-gray-400">
                  เสื้อยืด พวงกุญแจ สติกเกอร์ ประกาศนียบัตร
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-12">
        <div className="flex flex-col my-2">
          <p className="text-red-400 font-bold">ของรางวัลสำหรับผู้ที่ได้</p>
          <p className="font-bold text-3xl">คะแนนสูงสุดอันดับ 3</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-cetner justify-center mb-8 md:mb-0 md:m-4 md:ml-0 shadow-lg h-96 rounded-2xl w-full">
            <div className="flex flex-col items-center justify-center">
              <span className="px-6 py-2">
                <Image
                  src={airtag}
                  alt=""
                  width={189}
                  height={191}
                  placeholder="blur"
                />
              </span>
              <p className="text-gray-400 font-bold text-lg">Apple AirTag</p>
            </div>
          </div>
          <div className="relative md:m-4 md:mr-0 shadow-lg h-96 rounded-2xl w-full">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <span className="p-6">
                <Image
                  src={first_reward}
                  alt=""
                  width={284}
                  height={188}
                  placeholder="blur"
                />
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 w-full">
              <div className="flex justify-center w-full my-5">
                <p className="text-gray-400">
                  เสื้อยืด พวงกุญแจ สติกเกอร์ ประกาศนียบัตร
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="my-12 md:mr-4 w-full">
          <div className="flex flex-col my-2">
            <p className="text-red-400 font-bold">ของรางวัลสำหรับผู้ที่ได้</p>
            <p className="font-bold text-3xl">คะแนนสูงสุด 32 อันดับแรก</p>
          </div>
          <div className="relative shadow-lg h-96 rounded-2xl w-full">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <span className="p-6">
                <Image
                  src={first_reward}
                  alt=""
                  width={284}
                  height={188}
                  placeholder="blur"
                />
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 w-full">
              <div className="flex justify-center w-full my-5">
                <p className="text-gray-400">
                  เสื้อยืด พวงกุญแจ สติกเกอร์ ประกาศนียบัตร
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-12 md:ml-4 w-full">
          <div className="flex flex-col my-2">
            <p className="text-red-400 font-bold">ของรางวัลสำหรับผู้ที่ได้</p>
            <p className="font-bold text-3xl">คะแนนสูงสุด 64 อันดับแรก</p>
          </div>
          <div className="relative shadow-lg h-96 rounded-2xl w-full">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <span className="p-6">
                <Image
                  src={second_reward}
                  alt=""
                  width={279}
                  height={143}
                  placeholder="blur"
                />
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 w-full">
              <div className="flex justify-center w-full my-5">
                <p className="text-gray-400">
                  พวงกุญแจ สติกเกอร์ ประกาศนียบัตร
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="my-12 md:mr-4 w-full">
          <div className="flex flex-col my-2">
            <p className="text-red-400 font-bold">ของรางวัลสำหรับผู้ที่ได้</p>
            <p className="font-bold text-3xl">ได้มากกว่า 0 คะแนน</p>
          </div>
          <div className="relative shadow-lg h-96 rounded-2xl w-full">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <span className="p-6">
                <Image
                  src={third_reward}
                  alt=""
                  width={279}
                  height={130}
                  placeholder="blur"
                />
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 w-full">
              <div className="flex justify-center w-full my-5">
                <p className="text-gray-400">สติกเกอร์ ประกาศนียบัตร</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-12 md:ml-4 w-full">
          <div className="flex flex-col my-2">
            <p className="text-red-400 font-bold">ของรางวัลสำหรับผู้ที่ได้</p>
            <p className="font-bold text-3xl">ส่งคำตอบมากกว่า 1 ครั้ง</p>
          </div>
          <div className="relative shadow-lg h-96 rounded-2xl w-full">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <span className="p-6">
                <Image
                  src={fourth_reward}
                  alt=""
                  width={279}
                  height={130}
                  placeholder="blur"
                />
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 w-full">
              <div className="flex justify-center w-full my-5">
                <p className="text-gray-400">ประกาศนียบัตร</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
