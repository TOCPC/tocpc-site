import Head from 'next/head'
import { FC, memo } from 'react'

const MetaDataComponent: FC = () => {
  return (
    <Head>
      <title>Thailand Online Competitive Programming Contest 2021</title>
      <meta
        name="description"
        content="งานแข่งคอมพิวเตอร์โอลิมปิกสำหรับผู้ที่มีความสนใจในด้านการแก้ปัญหาเชิงคอมพิวเตอร์ ด้วยโจทย์เนื้อหาระดับ TOI เปิดให้ทุกคนจองได้แล้ววันนี้"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  )
}

export const MetaData = memo(MetaDataComponent)
