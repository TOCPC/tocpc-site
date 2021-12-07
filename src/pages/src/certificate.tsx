import { Certificate } from 'components/certificate'
import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

type CertData = {
  name: string
  rank: number
}

// export const getStaticProps: GetStaticProps = ({ query }) => {
//   return {
//     props: {

//     }
//   }
// }

// const CertificatePage: NextPage<{ data: string }> = ({ data }) => {
const CertificatePage: NextPage = () => {
  const router = useRouter()
  const { data } = router.query
  const parsedData: CertData = JSON.parse((data as string) ?? '{}')

  return (
    <Certificate
      name={parsedData?.name ?? 'นครบุระ ตินตะเขต'}
      rank={parsedData?.rank ?? 0}
    />
  )
}

export default CertificatePage
