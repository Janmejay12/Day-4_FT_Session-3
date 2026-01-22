import React, { useEffect, useState } from 'react'
import type { product } from '../product'
import CategoryDropdown from '../components/CategoryDropdown'
import ProductCard from '../components/ProductCard'
import productService from '../services/productService'
import { useProducts } from '../hooks/useProducts'

const Products = () => {
    const [search, setSearch] = useState<string>('')
    const [filtered, setFiltered] = useState<product[]>([])
    const [selectedCategory, setselectedCategory] = useState<string>('')
    
    const {data : products, isLoading, isError} = useProducts()
    

    useEffect(() => {
        if(!products){
            setFiltered([])
            return
        }
    let data = [...products]
        if(search !== ''){
            data = data.filter((p) => {
           return p.title.toLowerCase().includes(search.toLowerCase())
        })
        }
        if(selectedCategory !== ''){
            data = data.filter((p) => p.category === selectedCategory) 
        }
   
        setFiltered(data);
        

   setFiltered(data)
},[search, products, selectedCategory])

 if(isLoading){
        return <p>Products Loading</p>
    }

    if(isError){
        return <p>Error fetching products</p>
    }
    if(Array.isArray(products) && products.length === 0){
        return <p>No products found</p>
    }

  return (
    <div>
        <div>
            <h2>All Products</h2>
             <form>
                <input
                    placeholder="Search for..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <CategoryDropdown
            selectedCategory = {selectedCategory}
            onChangeCategory = {setselectedCategory}
            />
            <ul>
                {filtered.map((product) => (
                <div key = {product.id}>
                    <ProductCard product={product}/>
                </div>
            ))} 
            </ul>
            
        </div>
    </div>
  )
}

export default Products
