import React, { useEffect, useState } from 'react'
import productService from '../services/productService'
import { useCategories } from '../hooks/useCategories'

interface CategoryDropdownProps {
  selectedCategory : string
  onChangeCategory : (category:string) => void
}

const CategoryDropdown : React.FC<CategoryDropdownProps>= ({selectedCategory,onChangeCategory}) => {
    const {data : categories, isLoading, isError} = useCategories()

    if(isLoading) return <h3> loading categories...</h3>
    if(isError) return <h2>failed to load categories</h2>

   
  return (
    <div>
      <label htmlFor="categories">Select category here:</label>
      <select id="category dropdown"
              className='bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 p-2 w-48'
              value={selectedCategory}
              onChange={(e) => onChangeCategory(e.target.value)}
                >
                <option value="">All</option>

                {categories?.map((category) => (
                  <option key={category} value={category}>{category}</option>
                  
                ))}

              </select>
    </div>
  )
}

export default CategoryDropdown