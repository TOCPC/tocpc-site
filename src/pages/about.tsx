import { Description } from 'components/Description'
import { Layout } from 'components/Layout'

const About = () => {
  return (
    <>
      <Description />
      <main className="relative w-full min-h-screen bg-gray-900">
        <div className="flex flex-col items-center">
          <div className="flex flex-col px-10 sm:px-16 md:px-24 mt-28 sm:mt-40 max-w-4xl">
            <p className="font-display text-3xl text-white">เกี่ยวกับเรา</p>
            <p className="font-display text-white py-8">
              พวกเราคือกลุ่มอดีตนักเรียนค่ายโอลิมปิกวิชาการคอมพิวเตอร์ที่ตั้งใจจะจัดการแข่งขันเพื่อส่งเสริมและพัฒนาเหล่านักเรียนค่ายรุ่นต่อๆ
              ไป ให้มีทักษะกระบวนการคิดและการเขียนโปรแกรมที่ดียิ่งขึ้น
            </p>
            <p className="font-display text-white pb-8">
              ทั้งนี้{' '}
              <span className="text-red-400">
                เราไม่ใช่กลุ่มคณะผู้จัดส่งผู้แทนโอลิมปิกวิชา
                การและมิได้มีส่วนเกี่ยวข้องกับองค์กรที่รับผิดชอบด้านโอลิมปิกวิชาการ
                (เช่น สอวน. หรือ สสวท.) โดยตรง
              </span>
            </p>
            <p className="font-display text-white pb-8">
              พวกเราเป็นเพียงกลุ่มอดีตนักเรียนค่ายคอมพิวเตอร์โอลิมปิกที่มีแนวคิดและความเชื่อมั่นร่วมกันที่จะพัฒนาคอมพิวเตอร์โอลิมปิกให้ดียิ่งขึ้นต่อไปในอนาคต
              หากสนใจร่วมงานกับพวกเรา สามารถ ติดต่อเรา ได้
            </p>
          </div>
          <div className="flex flex-col px-10 sm:px-16 md:px-24 my-16 max-w-4xl">
            <p className="font-display text-3xl text-white">About Us</p>
            <p className="font-display text-white py-8">
              We are a community of alumni from the training camps held in
              Thailand, having common goal of improving younger
              generations&apos; ability to do competitive programming and
              problem solving.
            </p>
            <p className="font-display text-white pb-8">
              <span className="text-red-400">
                We are not an officially authorized organization involving the
                process of selection, training and competition in Thailand
                Olympiad in Informatics (TOI) or International Olympiad in
                Informatics (IOI). The process of selection, training and
                competition is being managed officially by The Institute for the
                Promotion of Teaching Science and Technology (IPST) and The
                Promotion of Academic Olympiad and Development of Science
                Education Foundation under the patronage of Her Royal Highness
                Princess Galyani Vadhana Krom Luang Naradhiwas Rajanagarindra
                (POSN).{' '}
              </span>
              We are just a group of people who want to improve and promote
              competitive programming in Thailand.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
