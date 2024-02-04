import { RouterProvider } from '@tanstack/react-router'
import React from 'react'
import { router } from './router'

export const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
