import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Layout = lazy(() => import('./Components/Layout'))
const Index = lazy(() => import('./Pages/Index'))

const CategoryColors = lazy(() => import('./Pages/CategoryColors'))
const CategoryIcons = lazy(() => import('./Pages/CategoryIcons'))
const CategoryAnimations = lazy(() => import('./Pages/CategoryAnimations'))
const CategorySpinners = lazy(() => import('./Pages/CategorySpinners'))
const CategoryComponents = lazy(() => import('./Pages/CategoryComponents'))
const CategoryAI = lazy(() => import('./Pages/CategoryAI'))

import Spinner from './Components/Spinner'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: '/category-colors',
        element: <CategoryColors />,
      },
      {
        path: '/category-icons',
        element: <CategoryIcons />,
      },
      {
        path: '/category-animations',
        element: <CategoryAnimations />,
      },
      {
        path: '/category-spinners',
        element: <CategorySpinners />,
      },
      {
        path: '/category-componentshtml',
        element: <CategoryComponents />,
      },
      {
        path: '/category-ia',
        element: <CategoryAI />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
)
