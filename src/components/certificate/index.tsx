import { FC } from 'react'
import { Background } from './bg'
import { LogoWithText } from './LogoWithText'
import { TOCPCLogo } from './TOCPCLogo'

export const Certificate: FC<{ name?: string; rank?: number }> = ({
  name = 'บุระนคร ตินตะเขต',
  rank = 1,
}) => {
  const getRankText = (rank: number) => {
    if (rank === 1)
      return (
        <p
          style={{
            fontSize: '101px',
            marginTop: '128px',
          }}
          className="font-display text-white font-bold"
        >
          ได้คะแนนสูงสุดอันดับ{' '}
          <span
            style={{
              fontSize: '151px',
              marginTop: '128px',
            }}
            className="font-display text-red-400 font-bold"
          >
            1
          </span>
        </p>
      )

    if (rank === 2)
      return (
        <p
          style={{
            fontSize: '101px',
            marginTop: '128px',
          }}
          className="font-display text-white font-bold"
        >
          ได้คะแนนสูงสุดอันดับ{' '}
          <span
            style={{
              fontSize: '151px',
              marginTop: '128px',
            }}
            className="font-display text-red-400 font-bold"
          >
            2
          </span>
        </p>
      )

    if (rank === 3)
      return (
        <p
          style={{
            fontSize: '101px',
            marginTop: '128px',
          }}
          className="font-display text-white font-bold"
        >
          ได้คะแนนสูงสุดอันดับ{' '}
          <span
            style={{
              fontSize: '151px',
              marginTop: '128px',
            }}
            className="font-display text-red-400 font-bold"
          >
            3
          </span>
        </p>
      )

    if (rank <= 32 && rank > 3)
      return (
        <p
          style={{
            fontSize: '101px',
            marginTop: '128px',
          }}
          className="font-display text-white font-bold"
        >
          ได้คะแนนสูงสุด 32 อันดับแรก
        </p>
      )

    if (rank <= 64 && rank > 32)
      return (
        <p
          style={{
            fontSize: '101px',
            marginTop: '128px',
          }}
          className="font-display text-white font-regular"
        >
          ได้คะแนนสูงสุด 64 อันดับแรก
        </p>
      )
    else return <></>
  }

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
          {name}
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
          {getRankText(rank)}
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
