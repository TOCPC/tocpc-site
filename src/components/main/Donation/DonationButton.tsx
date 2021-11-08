import { FunctionComponent } from 'react'
interface DonationButtonProps {
  isSelected: boolean
  amount: number
}

export const DonationButton = ({ isSelected, amount }: DonationButtonProps) => {
  if (isSelected) {
    return (
      <button className="font-light font-display  border-gray-500 w-full py-1 border rounded-md shadow-sm text-white bg-black">
        {amount} บาท*
      </button>
    )
  }

  return (
    <button className="font-light font-display text-gray-500 border-gray-500 w-full py-1 border rounded-md shadow-sm hover:text-white hover:bg-black">
      {amount} บาท*
    </button>
  )
}