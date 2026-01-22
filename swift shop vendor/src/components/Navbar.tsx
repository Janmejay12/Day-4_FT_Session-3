import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
//import '../theme.css'

const Navbar = () => {

   const [quantity, setQuantity] = useState<string>('')
  return (
    <nav className='bg-green-800 p-6 '>
        <div>
            Swift Shop Vendor
        </div>
        <NavLink to = "/" className={({isActive}) => (isActive ? 'active' : 'notactive' )}>
            Home
        </NavLink>
        <NavLink to = "/products" className={({isActive}) => (isActive ? 'active' : 'notactive' )}>
            Products
        </NavLink>
        <NavLink to = "/about" className={({isActive}) => (isActive ? 'active' : 'notactive' )}>
            About Us
        </NavLink>
        <NavLink to = "/cart" className={({isActive}) => (isActive ? 'active' : 'notactive' )}>
            Cart
        </NavLink>
    </nav>
      
    
  )
}

export default Navbar
