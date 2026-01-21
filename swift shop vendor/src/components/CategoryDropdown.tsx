import React, { useEffect, useState } from 'react'

interface CategoryDropdownProps {
  selectedCategory : string
  onChangeCategory : (category:string) => void
}

const CategoryDropdown : React.FC<CategoryDropdownProps>= ({selectedCategory,onChangeCategory}) => {
    const [categories, setCategories] = useState<string[]>([])

    useEffect (() => {
        const getCategories = async () =>{
            
                const response = await fetch('https://dummyjson.com/products/category-list')                                
                const data : string[] = await response.json() 
                setCategories(data);  
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