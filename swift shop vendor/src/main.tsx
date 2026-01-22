import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CartProvider from './context/CartProvider.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Products from './pages/Products.tsx'
import Product from './pages/Product.tsx'
import App from './App.tsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Cart from './pages/Cart.tsx'
import About from './pages/About.tsx'
import Error from './pages/Error.tsx'
import Navbar from './components/Navbar.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
    </>
  );
};
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout/>,
    children : [
      {index: true, element : <Dashboard/>},
      {path : '/products', element: <Products/>},
      {path : '/cart', element: <Cart/>},
        {path : '/product/:productId', element: <Product/>},

    ]
  },
  {path : '/about', element: <About/>},
  {path : '/*', element: <Error/>},


])
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <CartProvider>
    <RouterProvider router={router} />
</CartProvider>
</QueryClientProvider>
)
