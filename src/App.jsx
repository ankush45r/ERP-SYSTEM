import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/Navbar'
import './App.css'

import './component/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './component/Home'
import ProductList from './component/ProductList'
import Dashboard from './component/Dashboard'
import ContextProvider from './component/ContextProvider'
import AddProduct from './component/AddProduct'
import Footer from './component/footer'
import ProductSidebar from './component/ProductSidebar'
import productContext from './component/context'
import Order from './component/Order'


function App() {
  const data = useContext(productContext)

  const router = createBrowserRouter([
    {
      path: '/products',
      element: <><Navbar></Navbar><ProductSidebar/></>
    },
    {
      path: '/productWithType',
      element: <><Navbar></Navbar><div className="type-product"><ProductSidebar/></div><ProductList></ProductList></>
    },
    {
      path: '/',
      element: <><Navbar></Navbar><Dashboard></Dashboard></>
    }
    ,{
      path: '/addproduct',
      element: <><Navbar></Navbar><AddProduct></AddProduct></>
    },{
      path: '/orders',
      element: <><Navbar></Navbar><Order></Order></>
    }
  ])
  return (
    <>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
      </ContextProvider>
      {/* <ProductList></ProductList> */}
      <Footer></Footer>
    </>
  )
}

export default App
