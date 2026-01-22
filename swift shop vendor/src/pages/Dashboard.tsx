import React, { useContext, useEffect, useState } from 'react'
import AddProductForm from '../components/AddProductForm';
import Navbar from '../components/Navbar';
import Products from './Products';
//import { CartContext } from '../context/CartProvider';





const Dashboard = () => {
   //const {cartItems,addToCart} = useContext(CartContext)
  return (
    <div className='bg-blue'>
        <Navbar/>
        <h2>Welcome to Nike Store</h2>
     {/* <AddProductForm/> */}
    </div>
  )
}

export default Dashboard