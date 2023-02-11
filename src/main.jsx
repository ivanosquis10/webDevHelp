import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/*
import Layout from './Components/Layout';
import Index from './Pages/Index';

import CategoryColors from './Pages/CategoryColors';
import CategoryIcons from './Pages/CategoryIcons';
import CategoryAnimations from './Pages/CategoryAnimations';
import CategorySpinners from './Pages/CategorySpinners';
import CategoryComponents from './Pages/CategoryComponents';
import Generadorescss from './Components/Generadorescss';
*/

const Layout = lazy(() => import('./Components/Layout'));
const Index = lazy(() => import('./Pages/Index'));

const CategoryColors = lazy(() => import('./Pages/CategoryColors'));
const CategoryIcons = lazy(() => import('./Pages/CategoryIcons'));
const CategoryAnimations = lazy(() => import('./Pages/CategoryAnimations'));
const CategorySpinners = lazy(() => import('./Pages/CategorySpinners'));
const CategoryComponents = lazy(() => import('./Pages/CategoryComponents'));

import './index.css';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<h1></h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
