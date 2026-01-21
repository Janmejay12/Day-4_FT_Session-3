import React, { createContext, useState } from 'react'
interface cartItem {
  title:  string; 
  price: number;
  quantity: number;
}
    export const CartContext = createContext({})
const cartContext = ({children}) => {
    const [cartItems,setCartIems] = useState<cartItem>(localStorage.getItem(cartItem) ? JSON.parse(localStorage.getItem('cartItems')) : [])

    const addToCart = (item : cartItem) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.title === item.title); 
        if(isItemInCart){
          setCartIems(
            cartItems.map((cartItem) => {cartItem.title === item.title ? { ...cartItem, quantity: cartItem.quantity + 1} : cartItem})
          )
        }
        else {
          setCartIems([...cartItems,{...item, quantity : 1}])
        }
    }
    
  return (
    <div>
      
    </div>
  )
}

export default cartContext
