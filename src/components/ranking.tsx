import { FC, memo, useMemo } from 'react'
import contestData from 'data/contest-data.json'
import { Table } from './ranking/table'

export interface IColumn {
  code: string
  name: string
}

export interface IData {
  rank: number
  name: string
  // woody: number
  // longjump: number
  // parentheses: number
  // moles: number
  // arranging: number
  // guitar: number
  total: number
}

export const Ranking: FC = () => {
  const Columns: Array<IColumn> = useMemo(() => {
    return [
      { name: 'อันดับ', code: 'rank' },
      { name: 'ชื่อ', code: 'name' },
      // { name: 'woody', code: 'woody' },
      // { name: 'longjump', code: 'longjump' },
      // { name: 'parentheses', code: 'parentheses' },
      // { name: 'moles', code: 'moles' },
      // { name: 'arranging', code: 'arranging' },
      // { name: 'guitar', code: 'guitar' },
      { name: 'คะแนน', code: 'total' },
    ]
  }, [])

  const Data: Array<IData> = useMemo(() => {
    const data = contestData.map((c) => {
      return {
        rank: c.rank,
        name: c.name,
        // woody: c.woody,
        // longjump: c.longjump,
        // parentheses: c.parentheses,
        // moles: c.moles,
        // arranging: c.arranging,
        // guitar: c.guitar,
        total: c.total,
      }
    })

    return data
  }, [])

  return (
    <main className="relative w-full min-h-screen bg-gray-900 overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mx-auto px-8 sm:px-36 mt-28 sm:mt-40 w-full">
          <h1 className="font-display text-3xl text-white mb-8">
            อันดับผู้เข้าแข่งขัน
          </h1>
          <Table columns={Columns} data={Data} />
        </div>
      </div>
    </main>
  )
}
