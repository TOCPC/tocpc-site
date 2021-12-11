import classNames from 'classnames'
import { IColumn, IData } from 'components/ranking'
import { useWindowDimensions } from 'lib/useWindowDimensions'
import { ElementHandle } from 'puppeteer-core'
import { FC, useState } from 'react'

type Columns = 'rank' | 'name' | 'total'

const SortAscendingIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ display: 'inline ' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4H16M3 8H12M3 12H9M13 12L17 8M17 8L21 12M17 8V20"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const SortDescendingIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ display: 'inline ' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4H16M3 8H12M3 12H12M17 8V20M17 20L13 16M17 20L21 16"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Table: FC<{ columns: Array<IColumn>; data: Array<IData> }> = ({
  columns,
  data,
}) => {
  const { width } = useWindowDimensions()

  // const nColumns =
  //   width < 540
  //     ? columns.filter((c) => lowWidthColumns.includes(c.code))
  //     : columns
  // const nData =
  //   width < 540
  //     ? data.map((d) => {
  //         return {
  //           rank: d.rank,
  //           name: d.name,
  //           total: d.total,
  //         },
  //       })
  //     : data

  const nColumns = columns
  const [nData, setData] = useState(data)

  const calculateCellStyles = (type: 'head' | 'data', cell: string) => {
    let styles: Array<string> = []
    if (cell === 'rank') styles.push('w-1/4')
    if (cell === 'rank' && type === 'data') styles.push('text-center')
    if (cell === 'name') styles.push('w-full text-left')
    if (cell === 'total') styles.push('pr-6 text-center')

    return styles.join(' ')
  }

  return (
    <table className="w-full max-w-xl overflow-y-scroll block border border-gray-600 rounded-xl pb-4 bg-gray-900 pt-4">
      <thead>
        <tr>
          {nColumns.map((col, i) => {
            return (
              <th
                key={i}
                className={classNames(
                  'h-4 border-b border-gray-600 pb-4',
                  calculateCellStyles('head', col.code)
                )}
              >
                <span className="font-display text-white">{col.name}</span>
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {nData.map((d, i) => {
          return (
            <tr className="bg-gray-900" key={i}>
              {Object.keys(d).map((dItem, i) => {
                return (
                  <td
                    key={i}
                    className={classNames(
                      'h-8 border-b border-gray-600 py-4',

                      calculateCellStyles('data', dItem)
                    )}
                  >
                    <span className="font-display text-white font-light">
                      {/*@ts-ignore*/}
                      {d[dItem]}
                    </span>
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
