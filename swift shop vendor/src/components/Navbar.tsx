import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// No separate CSS file needed when using standard Tailwind utility classes

const Navbar = () => {
  const [quantity, setQuantity] = useState('');

  // Define utility classes for active and inactive states
  const baseLinkClasses = 'px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out';
  const activeLinkClasses = 'bg-green-700 text-white';
  const inactiveLinkClasses = 'text-green-100 hover:bg-green-600 hover:text-white';

  return (
    // Use flexbox for layout, padding, and background color
    <nav className='bg-green-800 p-4 flex items-center justify-between'>
      {/* Brand Name Styling */}
      <div className='text-2xl font-bold text-white'>
        Swift Shop Vendor
      </div>

      {/* Navigation Links Container */}
      <div className='flex items-center space-x-4'>
        <NavLink
          to="/"
          // Combine base classes with conditional active/inactive classes
          className={({ isActive }) =>
            `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
          }
        >
          Cart
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
