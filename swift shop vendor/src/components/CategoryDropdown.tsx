import React, { useEffect, useState } from 'react'
import productService from '../services/productService'

interface CategoryDropdownProps {
  selectedCategory : string
  onChangeCategory : (category:string) => void
}

const CategoryDropdown : React.FC<CategoryDropdownProps>= ({selectedCategory,onChangeCategory}) => {
    const [categories, setCategories] = useState<string[]>([])

    useEffect (() => {
        const getCategories = async () =>{
            
                const response = await productService.getAllCategories()                         
                setCategories(response);  
        }   
        getCategories();
       
    },[])

   
  return (
    <div>
      <label htmlFor="categories">Select category here:</label>
      <select id="category dropdown"
              className='bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 p-2 w-48'
              value={selectedCategory}
              onChange={(e) => onChangeCategory(e.target.value)}
                >
                <option value="">All</option>

                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                  
                ))}

              </select>
    </div>
  )
}

export default CategoryDropdown