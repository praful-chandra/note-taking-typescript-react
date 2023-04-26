import React, { type ReactElement } from 'react'
import { ReactComponent as AuthImage } from '../../../assets/authImage.svg'
const AuthBanner = (): ReactElement => {
  return (
    <div className="bg-primary w-full h-full rounded-3xl p-4 flex justify-center pt-36">
      <div className="h-3/4 flex flex-col items-center justify-between">
        <h3 className="font-jost text-5xl">NoteTaker</h3>
        <AuthImage className='max-w-full' />
      </div>
    </div>
  )
}

export default AuthBanner
