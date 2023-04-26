import React, { type ReactElement } from 'react'

interface LoginSignupSwithProps {
  text: string
  linkText: string
  link: string
  absolute?: boolean
  className?: string
}

const LoginSignupSwith = ({ text, linkText, link, absolute = true, className }: LoginSignupSwithProps): ReactElement => {
  return (
    <p
      className={`top-8 right-2 text-sm ${absolute ? 'absolute' : ''} ${className ?? ''}`}
    >
      {text} <span className='text-primary'>{linkText}</span>
    </p>
  )
}

export default LoginSignupSwith
