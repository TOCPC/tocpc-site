import { FC } from 'react'
import { Background } from './bg'
import { LogoWithText } from './LogoWithText'
import { TOCPCLogo } from './TOCPCLogo'

export const Certificate: FC = () => {
  return (
    <div
      style={{ width: '3508px', height: '2480px' }}
      className="bg-gray-900 relative"
    >
      <div style={{ position: 'absolute', left: '263px', top: '243.98px' }}>
        <LogoWithText />
      </div>
      <Background />
      <div style={{ position: 'absolute', left: '257px', top: '628px' }}>
        <h2
          style={{ fontSize: '96px' }}
          className="font-display text-white font-semibold"
        >
          มอบเกียรติบัตรฉบับนี้เพื่อยืนยันว่า
        </h2>
        <h1
          style={{ fontSize: '225px' }}
          className="font-display text-red-400 font-bold"
        >
          บุระนคร ตินตะเขต
        </h1>
        <div style={{ marginTop: '88px' }}>
          <p
            style={{ fontSize: '76px' }}
            className="font-display text-white font-regular"
          >
            เข้าร่วมการแข่งขันแข่งขัน
          </p>
          <p
            style={{ fontSize: '76px' }}
            className="font-display text-white font-regular"
          >
            Thailand Online Competitive Programming Contest 2021
          </p>
        </div>
      </div>
      <TOCPCLogo top="715px" left="1564px" width="2890px" height="1386px" />
      <p
        style={{
          fontSize: '80px',
          position: 'absolute',
          bottom: '369px',
          left: '257px',
        }}
        className="font-display text-white font-extralight"
      >
        วันที่ 20-21 พฤศจิกายน 2021
      </p>
    </div>
  )
}
