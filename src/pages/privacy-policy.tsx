import { MetaData } from 'components/Meta'
import { Layout } from 'components/Layout'

const About = () => {
  return (
    <>
      <MetaData />
      <main className="relative w-full min-h-screen bg-gray-900">
        <div className="flex flex-col items-center">
          <div className="flex flex-col max-w-4xl px-10 sm:px-16 md:px-24 mt-28 sm:mt-40">
            <p className="text-3xl text-white font-display">
              นโยบายความเป็นส่วนตัว
            </p>
            <div className="prose prose-md">
              <ol>
                <li>
                  <p>ในนโยบายความเป็นส่วนตัวฉบับนี้</p>
                  <ul>
                    <li>
                      <p>
                        “อุปกรณ์” หมายความว่า
                        คอมพิวเตอร์ที่สามารถนำมาใช้เข้าถึงเว็บไซต์ของ
                        tocpc.codes ได้ โดยรวมไปด้วย แต่ไม่จำกัดถึง
                      </p>
                      <ul>
                        <li>คอมพิวเตอร์เดสก์ท็อป</li>
                        <li>สมาร์ทโฟน</li>
                        <li>แท็บเล็ต</li>
                      </ul>
                    </li>
                    <li>
                      <p>
                        “ข้อมูล” หมายความว่า ข้อมูลในลักษณะใด ๆ
                        ก็ได้ทั้งที่เป็นข้อมูลที่บุคคลเข้าใจได้หรือไม่ก็ได้
                        โดยเป็นข้อมูลที่อุปกรณ์ต่าง ๆ
                        สามารถเข้าถึงได้โดยอัตโนมัติหรือถูกจัดไว้อย่างเป็นระบบพร้อมให้เข้าถึงข้อมูลเพื่อใช้ใน
                      </p>
                    </li>
                    <li>
                      “ข้อมูลส่วนบุคคล” หมายความว่า
                      ข้อมูลส่วนบุคคลที่เชื่อมโยงกับบุคคลหรือสามารถระบุตัวตนได้
                      อาจรวมไปด้วย แต่ไม่จำกัดถึง ชื่อตัว ชื่อสกุล เลขโทรศัพท์
                      ที่อยู่อีเมล
                      หรือข้อมูลส่วนบุคคลไม่รวมถึงข้อมูลที่ไม่ได้ระบุตัวตนผู้ใช้โดยเฉพาะ
                    </li>
                    <li>
                      “บัญชี” หมายความว่า บัญชีที่ได้ลงทะเบียนไว้กับ tocpc.codes
                    </li>
                    <li>
                      “บริการ” หมายความรวมถึง บริการ เนื้อหา ฟีเจอร์ เทคโนโลยี
                      หรือคุณสมบัติ ตลอดจนเว็บไซต์ แอปพลิเคชัน
                      และบริการทั้งหมดที่เกี่ยวข้องกับ tocpc.codes
                    </li>
                    <li>
                      “ผู้ใช้” หมายความว่า บุคคลที่ใช้บริการหรือเข้าใช้เว็บไซต์
                    </li>
                    <li>
                      “คุกกี้” หมายความว่า
                      ไฟล์ข้อความขนาดเล็กที่เว็บไซต์ส่งไปยังอุปกรณ์ของผู้ใช้
                      เพื่อที่จะระบุตัวตนหรือเก็บข้อมูลในเบราว์เซอร์ของผู้ใช้
                    </li>
                    <li>
                      “เจ้าของข้อมูล” หมายความว่า
                      บุคคลที่ข้อมูลส่วนบุคคลนั้นระบุไปถึง
                      มิใช่กรณีที่บุคคลมีความเป็นเจ้าของข้อมูล
                      หรือเป็นผู้สร้างหรือเก็บรวบรวมข้อมูลนั้นเองเท่านั้น
                      บุคคลในที่นี้หมายถึง บุคคลธรรมดาเท่านั้น
                      แต่ไม่รวมถึงนิติบุคคลที่จัดตั้งขึ้นตามกฎหมาย
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    บุคคลที่มีอายุต่ำกว่า 13 ปีบริบูรณ์
                    จะไม่สามารถใช้บริการเว็บไซต์หรือเข้าเว็บไซต์ได้ โดย
                    tocpc.codes จะไม่เก็บรวบรวมข้อมูล
                    รวมถึงข้อมูลส่วนบุคคลโดยเจตนา หาก tocpc.codes
                    พบเจอว่าได้เก็บข้อมูลส่วนบุคคลของบุคคลที่มีอายุต่ำกว่า 13
                    ปีบริบูรณ์ tocpc.codes จะลบข้อมูลดังกล่าวออกทันที
                  </p>
                </li>
                <li>
                  <p>
                    tocpc.codes
                    เก็บรักษาข้อมูลส่วนบุคคลเพื่อให้เป็นไปตามหน้าที่หรือข้อบังคับกฎหมาย
                    และเพื่อวัตถุประสงค์ตาม ข้อ 4 tocpc.codes
                    อาจเก็บรักษาข้อมูลส่วนบุคคลไว้เป็นระยะเวลานานกว่าที่กฎหมายกำหนดถ้าเป็นไปเพื่อวัตถุประสงค์ตาม
                    ข้อ 4 หากบัญชีของผู้ใช้ถูกปิด tocpc.codes
                    อาจดำเนินการตามขั้นตอนเพื่อปกปิดข้อมูลส่วนบุคคล
                    และข้อมูลอื่น ๆ และ tocpc.codes สงวนสิทธิ์
                  </p>
                </li>
                <li>
                  <p>
                    tocpc.codes จะไม่แบ่งปันข้อมูลให้กับหน่วยงาน หรือบุคคล
                    ยกเว้นจะมีคำสั่งจากศาลเท่านั้น
                  </p>
                </li>
                <li>
                  <p>tocpc.codes อาจประมวลผลข้อมูลของผู้ใช้</p>
                  <ol>
                    <li>
                      เพื่อดำเนินการเว็บไซต์
                      ปรับแต่งเนื้อหาให้เป็นเนื้อหาที่เข้ากับผู้ใช้โดยเฉพาะ
                    </li>
                    <li>
                      เพื่อปฏิบัติตามเงื่อนไขและข้อตกลงในการใช้งานของ
                      tocpc.codes
                    </li>
                    <li>เพื่อให้เป็นไปตามกฎหมาย</li>
                  </ol>
                </li>
                <li>
                  <p>
                    tocpc.codes จะแบ่งปันข้อมูลส่วนบุคคลออกไปเมื่อ tocpc.codes
                    เชื่อโดยสุจริตว่าการเข้าถึง การใช้ การเก็บรักษา
                    หรือการเปิดเผยข้อมูลนั้นมีเหตุจำเป็นอันสมควรเพื่อวัตถุประสงค์
                  </p>
                  <ol>
                    <li>ในการให้เป็นไปตามกฎหมาย</li>
                    <li>
                      ตรวจจับ ป้องกัน หรือระบุการประพฤติมิชอบ
                      ปัญหาด้านความปลอดภัยหรือด้านเทคนิค
                    </li>
                    <li>
                      ป้องกันอันตรายต่อสิทธิ์ ทรัพย์สิน
                      หรือความปลอดภัยของประชาชนตามที่กฎหมายกำหนดหรืออนุญาต
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
