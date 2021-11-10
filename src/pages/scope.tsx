import { MetaData } from 'components/Meta'
import { Layout } from 'components/Layout'

const About = () => {
  return (
    <>
      <MetaData />
      <main className="relative w-full min-h-screen bg-gray-900">
        <div className="flex flex-col items-center">
          <div className="flex flex-col px-10 sm:px-16 md:px-24 mt-20 sm:mt-32 max-w-4xl font-display text-white mb-12">
            <p className="font-display text-3xl text-white py-6">
              ขอบเขตเนื้อหาวิชาที่ครอบคลุมในการแข่งขัน
            </p>
            <div className="prose prose-md">
              <p>
                แบ่งได้เป็น 3 หมวด คือ (1) คณิตศาสตร์ (2)
                พื้นฐานวิทยาการคอมพิวเตอร์ และ (3) อัลกอริทึม
              </p>
              <ol type="1">
                <li>
                  <b>หมวดคณิตศาสตร์</b>
                  <ul>
                    <li>
                      1.1 เลขคณิตและเรขาคณิต
                      <ul>
                        <li>
                          1.1.1 จำนวนเต็ม คุณสมบัติของเลขจำนวนเต็ม (ค่าบวก ค่าลบ
                          เลขคู่ เลขคี่ การหารลงตัว จำนวนเฉพาะ)
                        </li>
                        <li>1.1.2 เลขเศษส่วน และร้อยละ</li>
                        <li>
                          1.1.3 จุด เวคเตอร์ พิกัดจุดแบบคาร์ทิเชียน (Cartesian
                          coordinates) ในตารางสองมิติที่มีพิกัดเป็นจำนวนเต็ม
                        </li>
                        <li>1.1.4 ระยะทางแบบยูคลิด ทฤษฏีพิธากอรัส</li>
                        <li>
                          1.1.5 ส่วนของเส้นตรง จุดตัดของเส้นตรง
                          และคุณสมบัติพื้นฐานที่เกี่ยวข้อง
                        </li>
                        <li>
                          1.1.6 มุม สามเหลี่ยม สี่เหลี่ยมผืนผ้า
                          สี่เหลี่ยมจัตุรัส วงกลม
                        </li>
                      </ul>
                    </li>
                    <li>
                      1.2 โครงสร้างไม่ต่อเนื่อง (discrete structures)
                      <ul>
                        <li>1.2.1 ฟังก์ชัน ความสัมพันธ์ และเซ็ต</li>
                        <li>1.2.2 ตรรกศาสตร์พื้นฐาน</li>
                        <li>1.2.3 วิธีการพิสูจน์</li>
                        <li>
                          1.2.4 วิธีการนับเบื้องต้น
                          <ul>
                            <li>
                              1.2.4.1 กฎของการบวกและกฎของการคูณ (Sum rule and
                              Product rule), หลักการเพิ่มเข้า-ตัดออก
                              (inclusion-exclusion principle),
                              ลำดับเลขคณิตและเรขาคณิต จำนวนแบบฟิโบนัชชิ
                              (Fibonacci numbers)
                            </li>
                            <li>
                              1.2.4.2 กฏรังนกพิราบ (Pigeonhole principle)
                              เพื่อใช้ในการหาขอบเขต
                            </li>
                            <li>
                              1.2.4.3 การเรียงสับเปลี่ยน
                              และวิธีจัดหมู่ระดับพื้นฐาน
                            </li>
                            <li>
                              1.2.4.4 ฟังก์ชันเลขเศษส่วน (Fractional function)
                              และสัมประสิทธิ์ทวินาม (Binomial coefficient)
                            </li>
                          </ul>
                        </li>
                        <li>
                          1.2.5 กราฟและต้นไม้
                          <ul>
                            <li>1.2.5.1 ต้นไม้และคุณสมบัติพื้นฐาน</li>
                            <li>
                              1.2.5.2 กราฟไม่มีทิศทาง (degree, path, cycle,
                              connectedness, Handshaking Lemma)
                            </li>
                            <li>
                              1.2.5.3 กราฟแบบมีทิศทาง (in-degree, out-degree,
                              directed path/cycle)
                            </li>
                            <li>1.2.5.4 Spanning trees</li>
                            <li>
                              1.2.5.5 วิธีการเดินผ่านต้นไม้ (traversal
                              strategies: defining the node order for ordered
                              trees)
                            </li>
                            <li>
                              1.2.5.6 &apos;Decorated&apos; graphs with
                              edge/node labels, weights, colors
                            </li>
                            <li>
                              1.2.5.7 Multigraphs และ graphs ที่มี self loops
                            </li>
                            <li>
                              <b>หมายเหตุ</b> การแข่งขันไม่ครอบคลุมเนื้อหาเรื่อง
                              planar graphs, bipartite graphs, และ hypergraphs
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      1.3 เนื้อหาที่ไม่รวมอยู่ในการแข่งขัน
                      <ul>
                        <li>1.3.1 แคลคูลัส</li>
                        <li>1.3.2 ความน่าจะเป็น</li>
                        <li>1.3.3 สถิติ</li>
                        <li>1.3.4 จำนวนจริงและจำนวนเชิงซ้อน</li>
                        <li>
                          1.3.5 ภาคตัดกรวยทั่วไป (parabolas, hyperbolas,
                          ellipses)
                          แต่เรื่องวงกลมอยู่ภายใต้ขอบเขตเนื้อหาในการแข่งขันระดับชาติ
                        </li>
                        <li>
                          1.3.6 โพลิกอน
                          (ในระดับนานาชาติจะครอบคลุมเนื้อหาเกี่ยวกับโพลิกอน)
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <b>หมวดพื้นฐานวิทยาการคอมพิวเตอร์</b>
                  <ul>
                    <li>2.1 พื้นฐานด้านการเขียนโปรแกรม</li>
                    <li>2.2. ทักษะการแก้ปัญหา (problem-solving skill)</li>
                    <li>
                      2.3 พื้นฐานโครงสร้างข้อมูล
                      <ul>
                        <li>
                          2.3.1 ชนิดข้อมูลดั้งเดิม (Primitive data type) ได้แก่
                          Boolean, signed/unsigned integer, character
                        </li>
                        <li>2.3.2 แถวลำดับ (อาเรย์ อาเรย์หลายมิติ)</li>
                        <li>2.3.3 Record/Struct</li>
                        <li>2.3.4 สตริงและการดำเนินการกับสตริง</li>
                        <li>2.3.5 Static และ Stack allocation</li>
                        <li>
                          2.3.6 Lined structures (ทั้งที่เป็นแบบเส้นตรง
                          และแบบที่แบ่งเป็นสาขาได้)
                        </li>
                        <li>
                          2.3.7 การสร้าง โครงสร้างกองซ้อน (stack), คิว (queue),
                          ต้นไม้ และกราฟ
                        </li>
                        <li>2.3.8 การเลือกโครงสร้างข้อมูลที่เหมาะสม</li>
                        <li>
                          2.3.9 คิวลำดับความสำคัญ (priority queue), ไดนามิกเซต
                          (dynamic set), ไดนามิกแมพ (dynamic map)
                        </li>
                      </ul>
                    </li>
                    <li>
                      2.4 การเรียกตัวเองซ้ำ (Recursion)
                      <ul>
                        <li>2.4.1 แนวคิด</li>
                        <li>2.4.2 ฟังก์ชันทางคณิตศาสตร์ที่เรียกตัวเองซ้ำ</li>
                        <li>2.4.3 วิธีแบ่งแยกและเอาชนะ (divide and conquer)</li>
                        <li>
                          2.4.4 อัลกอริทึมการย้อนรอยแบบเรียกตัวเองซ้ำ (recursive
                          backtracking)
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <b>หมวดอัลกอริทึม</b>
                  <ul>
                    <li>
                      3.1 พื้นฐานการวิเคราะห์ความซับซ้อนของอัลกอริทึม
                      (algorithmic complexity)
                    </li>
                    <li>
                      3.2 กลวิธีทางอัลกอริทึม
                      <ul>
                        <li>3.2.1 Brute-Force algorithm</li>
                        <li>3.2.2 Greedy algorithm</li>
                        <li>3.2.3 การแบ่งแยกและเอาชนะ</li>
                        <li>
                          3.2.4 Backtracking (ทั้งที่เป็นแบบเรียกตัวเองซ้ำ
                          และไม่เรียกตัวเองซ้ำ)
                        </li>
                        <li>3.2.5 Branch-and-Bound algorithm</li>
                        <li>
                          3.2.6 Pattern matching and string/text algorithm
                        </li>
                        <li>3.2.7 Dynamic programming</li>
                      </ul>
                    </li>
                    <li>
                      3.3 อัลกอริทึมเชิงคำนวณพื้นฐาน
                      <ul>
                        <li>
                          3.3.1
                          อัลกอริทึมเชิงตัวเลขพื้นฐานที่เกี่ยวข้องกับจำนวนเต็ม
                          เช่น Radix Conversion, Euclid&apos;s algorithm,
                          Primality test in O(√N), Sieve of Eratosthenes,
                          Factorization, Efficient exponentiation
                        </li>
                        <li>
                          3.3.2 การจัดการอาร์เรย์ขั้นพื้นฐาน
                          (รวมถึงการทำฮิสโทแกรม และ Bucket sort)
                        </li>
                        <li>3.3.3 Sequential และ Binary search</li>
                        <li>3.3.4 Search by elimination</li>
                        <li>
                          3.3.5 การแบ่งข้อมูล (partitioning)
                          การจัดลำดับด้วยการแบ่งข้อมูลซ้ำๆ Quick sort
                        </li>
                        <li>
                          3.3.6 การเรียงข้อมูลที่มีเวลาที่แย่ที่สุดเป็น O(NlogN)
                          เช่น Heap sort และ Merge sort
                        </li>
                        <li>
                          3.3.7 Binary heap พื้นฐาน และ Binary search tree
                        </li>
                        <li>
                          3.3.8 การบรรยายโครงสร้างกราฟ เช่น adjacency list และ
                          adjacency matrix
                        </li>
                        <li>
                          3.3.9 Depth-first and breadth-first traversals of
                          graphs
                          และการหาองค์ประกอบที่เชื่อมต่อกันของกราฟแบบไม่มีทิศทาง
                        </li>
                        <li>
                          3.3.10 Shortest path algorithm เช่น Dijkstra,
                          Bellman-Ford และ Floyd-Warshall
                        </li>
                        <li>
                          3.3.11 Transitive closure (Floyd&apos;s algorithm)
                        </li>
                        <li>3.3.12 Minimum spanning tree</li>
                        <li>3.3.13 Topological sort</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <p className="font-display text-3xl text-white py-6">
              ข้อกำหนดของระบบปฏิบัติการและตัวแปลภาษาที่ใช้ในระบบตัวตรวจของการแข่งขัน
            </p>
            <div className="prose prose-md">
              <ol>
                <li>
                  โปรแกรมที่ผู้เข้าแข่งขันจัดทำในระหว่างการแข่งขัน
                  กำหนดให้เขียนตามมาตรฐานของภาษา C, C++, Java, Rust และ Python
                  (โดยการันตีได้แค่ภาษา C, C++ และ Rust เท่านั้นที่จะ Compile ผ่านทุกข้อ)
                  ไม่อนุญาตให้เขียนโปรแกรมที่ทำงานใน Graphic Mode
                </li>
                <li>
                  ฟังก์ชันทั้งหมดในการเขียนโปรแกรม
                  กำหนดให้ใช้ฟังก์ชันจากคลังมาตรฐานของภาษา C (The Standard C
                  Library), conio.h (เฉพาะการทำงานบนระบบปฏิบัติการวินโดวส์) และ
                  Standard Template Library (STL) เท่านั้น
                  <ul>
                    <li>
                      ไม่อนุญาตให้ใช้ฟังก์ชันจัดการกับแฟ้มและอุปกรณ์โดยตรงที่กำหนดรูปแบบใช้งานในแฟ้ม
                      (fentl.h), (io.h) และ (iomanip.h)
                    </li>
                    <li>
                      ไม่อนุญาตให้โปรแกรมสร้างแฟ้มข้อมูลสำรองเพิ่มเติมระหว่างการทำงาน
                      ห้ามอ่านหรือเขียนแฟ้มข้อมูลอื่นนอกเหนือจากที่โจทย์ระบุ
                    </li>
                    <li>
                      ไม่อนุญาตให้เรียกใช้โปรแกรมอื่นๆ (เช่น ผ่านทางฟังก์ชัน
                      system) หรือเรียกใช้ system call นอกเหนือจากที่ใช้งานปกติ
                    </li>
                    <li>
                      ไม่อนุญาตให้ทำการคำนวณแบบมัลติโปรเซสซิง (multi-processing)
                      เช่น ไม่อนุญาตให้โปรแกรมเรียกใช้ฟังก์ชันใน thread library
                      ต่างๆ
                    </li>
                  </ul>
                </li>
                <li>
                  โปรแกรมภาษา C ที่ผู้เข้าแข่งขันจัดทำในระหว่างการแข่งขัน
                  กำหนดให้เขียนโปรแกรมที่ส่วนขยายเป็น .c สำหรับภาษา C++
                  ให้ใช้นามสกุล .cpp และต้องอยู่ในรูปแบบที่สามารถแปล (compile)
                  <br />
                  ให้เป็นโปรแกรมที่สามารถทำงานได้โดยสมบูรณ์จากบรรทัดคำสั่ง
                  (command line)
                </li>
                <li>
                  ใช้ GCC (GNU compiler collection)
                  ในการตรวจโปรแกรมเพื่อให้คะแนน
                  โดยใช้วิธีการแปลและให้ทำงานจากบรรทัดคำสั่งเท่านั้น
                  โปรแกรมจะถูกสั่งให้ทำงานบนระบบปฏิบัติการและคอมไพเลอร์เดียวกันกับที่ผู้เข้าแข่งขันเลือกใช้
                  ทั้งนี้เครื่องที่ใช้ในการตรวจสอบคำตอบของผู้เข้าแข่งขันจะเลือกระบบปฏิบัติการและคอมไพเลอร์โดยพิจารณาข้อมูลจากที่กำหนดไว้ที่ต้นไฟล์คำตอบของผู้เข้าแข่งขัน
                  (รายละเอียดเพิ่มเติมอยู่ในหัวข้อ
                  &apos;ข้อมูลและรายละเอียดเพิ่มเติมเกี่ยวกับการแข่งขัน&apos;)
                </li>
                <li>
                  คอมไพเลอร์ออปชัน (compiler option)
                  ที่ใช้ในการแข่งขันจะทำการออปทิไมซ์ (optimize)
                  โปรแกรมโดยใช้ออปชัน -O2
                </li>
                <li>
                  อนุญาตให้เขียนโปรแกรมภาษา C ตามมาตรฐาน C++11
                  โดยคอมไพเลอร์ออปชันที่กำหนดเพิ่มใช้ออปชัน -std=c++11
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
