import { type ReactElement } from 'react'

import WelcomeText from './WelcomeText'

const LoginForm = (): ReactElement => {
  return (
    <div className="flex items-center justify-center flex-col pt-36">
      <WelcomeText />
    </div>
  )
}

export default LoginForm
