import { createBrowserRouter, createHashRouter, Navigate, useRoutes } from 'react-router-dom'
import DashBoard from '@/views/DashBoard'
import Course from '@/views/Course'
import Schedule from '@/views/Schedule'
import Record from '@/views/Record'

const router = createHashRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,

  },
  {
    path: '/dashboard',
    element: <DashBoard />
  },
  {
    path: '/course',
    element: <Course />
  },
  {
    path: '/schedule',
    element: <Schedule />
  },
  {
    path: '/record',
    element: <Record />
  }
])

export default router