import React, { type ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

const BaseLayout = (): ReactElement => {
  return (
    <div className="bg-secondary w-screen h-screen max-w-screen max-h-screen flex items-center justify-center p-4">
      <div className="bg-backgroundBase w-full h-full rounded-3xl p-4 shadow-lg shadow-backgroundBase">
        <Outlet />
      </div>
    </div>
  )
}

export default BaseLayout
