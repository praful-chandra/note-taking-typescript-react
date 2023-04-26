import { type ReactElement } from 'react'
import { SolidButton } from '../../../../components/form/button'
import TextInput from '../../../../components/form/TextInput'
import LoginSignupSwith from '../common/LoginSignupSwith'

import WelcomeText from './WelcomeText'

const LoginForm = (): ReactElement => {
  return (
    <div className="flex items-center justify-center flex-col pt-36 relative">
      <LoginSignupSwith
        text="Not a member?"
        linkText="Register Now"
        link="/register"
        className="hidden lg:block"
      />
      <WelcomeText />

      <form className="lg:w-2/4 w-2/3 mt-16 flex flex-col">
        <TextInput
          id="username"
          name="username"
          placeholder="Enter username"
          label="User Name"
        />
        <TextInput
          id="password"
          name="password"
          placeholder="Password"
          label="Password"
          type="password"
        />
        <button type="button" className="text-right w-fit ml-auto mb-10">
          Password Recovery
        </button>

        <SolidButton text="Sign In" />
        <LoginSignupSwith
          text="Not a member?"
          linkText="Register Now"
          link="/register"
          className=" lg:hidden text-center mt-8"
          absolute={false}
        />
      </form>
    </div>
  )
}

export default LoginForm
