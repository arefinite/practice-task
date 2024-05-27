import { DashboardLayout, RootLayout } from '@/layouts'
import { About, Cart, Error, Login, Products, Home, Contact } from '@/pages'

import { createBrowserRouter } from 'react-router-dom'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
  },
  {
    path: 'login',
    element: <Login />,
  },
])
