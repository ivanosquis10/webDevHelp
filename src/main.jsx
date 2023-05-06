import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './Pages/Index'
import CategoryColors from './Pages/CategoryColors'
import CategoryIcons from './Pages/CategoryIcons'
import CategoryAnimations from './Pages/CategoryAnimations'
import CategorySpinners from './Pages/CategorySpinners'
import CategoryComponents from './Pages/CategoryComponents'
import CategoryAI from './Pages/CategoryAI'
import Layout from './Components/Layout'

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
    <RouterProvider router={router} />
  </React.StrictMode>
)
