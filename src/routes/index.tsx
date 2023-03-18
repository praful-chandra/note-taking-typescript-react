import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import loadable from '@loadable/component'
import BaseLayout from '../layouts/BaseLayout'

const AppComp = loadable(async () => await import('../App'))
const LoginComp = loadable(async () => await import('../pages/auth/login'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <AppComp/>
      },
      {
        path: 'login',
        element: <LoginComp />

      }
    ]
  }
])

export default router
