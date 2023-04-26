import React, { type ReactElement } from 'react'

import AuthBanner from './components/AuthBanner'
import { LoginForm } from './components/loginForm'

const login = (): ReactElement => {
  return (
    <div className="flex h-full">
      <div className="lg:w-2/5 w-1/2  h-full hidden lg:block">
        <AuthBanner />
      </div>
      {/* lg:w-3/5 w-1/2 h-full sm:w-full md:w-full" */}
      <div className="w-full lg:w-3/5 xl:w-3/4 h-full">
      <h3 className="font-jost text-4xl lg:hidden w-full text-center">NoteTaker</h3>
        <LoginForm />
      </div>
    </div>
  )
}

export default login
