import { FunctionComponent } from 'react'
interface DonationButtonProps {
  isSelected: boolean
  amount: number
  star: boolean
}

export const DonationButton = ({
  isSelected,
  amount,
  star,
}: DonationButtonProps) => {
  if (isSelected) {
    return (
      <button
        type="button"
        className="text-sm font-display border-gray-500 w-full py-2 border rounded-md shadow-sm text-white bg-gray-900"
      >
        {amount} บาท{star && '*'}
      </button>
    )
  }

  return (
    <button
      type="button"
      className="transition font-display text-sm text-gray-500 border-gray-500 w-full py-2 border rounded-md shadow-sm hover:text-white hover:bg-gray-900"
    >
      {amount} บาท{star && '*'}
    </button>
  )
}
