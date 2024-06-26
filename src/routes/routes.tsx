import { DashboardLayout, RootLayout } from '@/layouts'
import {
  About,
  Cart,
  Error,
  Login,
  Products,
  Home,
  Contact,
  Profile,
  ManageProducts,
  AddProduct,
  ProductDetails,
} from '@/pages'
import Dashboard from '@/pages/Dashboard'

import { createBrowserRouter } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'

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
        path: 'product/:id',
        element: <ProductDetails />,
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
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'manage-products',
        element: <ManageProducts />,
      },
      {
        path: 'add-product',
        element: <AddProduct />,
      },
      {
        path: 'update-product/:id',
        element: <AddProduct />,
      },
    ],
  },
])
