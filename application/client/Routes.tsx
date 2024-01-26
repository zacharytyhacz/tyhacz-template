import * as React from "react"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

// Auth
import { Login } from './pages/Auth/Login'
import { ConfirmPhone } from './pages/Auth/Login/ConfirmPhone'

// In-App
import { AppLayout } from './layouts/App'
import { Dashboard } from './pages/App/Dashboard'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/phone-confirm",
    element: <ConfirmPhone />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
        {
            path: "dashboard",
            element: <Dashboard />
        }
    ]
  }
])

export const Routes = () => {

    return (
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    )
}
