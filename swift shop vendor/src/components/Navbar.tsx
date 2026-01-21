import React from 'react'
import { useTheme } from '../hooks/useTheme'
import '../theme.css'

const Navbar = () => {

    const {theme, toggleTheme} = useTheme()
  return (
    <nav className='bg-gray-800 p-6 '>
        <div>
            Swift Shop Vendor
        </div>
        <button className='text-black-200 hover:bg-gray-600 hover:text-white px-3 py-2'>
            Home
        </button>
        <button className='text-black-200 hover:bg-gray-600 hover:text-white px-3 py-2'>
            About Us
        </button>
        <button className='text-black-200 hover:bg-gray-600 hover:text-white px-3 py-2'>
            get Help
        </button>
        <button className='text-black-200 hover:bg-gray-600 hover:text-white px-3 py-2'     >
            products
        </button>
        <button className='text-black-200 hover:bg-gray-600 hover:text-white px-3 py-2' onClick={toggleTheme}>
            {theme === 'light' ? 'light' : 'dark'} Mode
        </button>
    </nav>
      
    
  )
}

export default Navbar
