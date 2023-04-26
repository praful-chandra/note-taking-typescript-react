import { type ReactElement } from 'react'

interface SolidButtonProps {
  text: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

const SolidButton = ({ text, type = 'button' }: SolidButtonProps): ReactElement => {
  return (
    <button
    type={type}
    className='bg-primary py-5 rounded-2xl text-white font-semibold text-base'
    >
        {text}
    </button>
  )
}

export default SolidButton
