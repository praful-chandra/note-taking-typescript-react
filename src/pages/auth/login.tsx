import React, { type ReactElement } from 'react'

import AuthBanner from './components/AuthBanner'
import { LoginForm } from './components/loginForm'

const login = (): ReactElement => {
  return (
    <div
    className='flex h-full'
    >
        <div className="w-2/5 h-full">
            <AuthBanner />
        </div>
        <div className="w-3/5 h-full">
          <LoginForm />
        </div>
    </div>
  )
}

export default login
