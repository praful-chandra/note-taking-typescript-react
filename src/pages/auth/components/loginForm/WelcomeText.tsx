import { type ReactElement } from 'react'

const WelcomeText = (): ReactElement => {
  return (
    <div className="text-center">
    <p className="font-medium text-4xl">Hello There!</p>
    <p className='font-extralight text-xl'>Welcome back you&lsquo;ve been missed!</p>
  </div>
  )
}

export default WelcomeText
