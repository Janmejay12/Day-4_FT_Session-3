import React, { useContext, useEffect, useState } from 'react'
import type {product} from '../product'
import ProductCard from '../components/ProductCard';
import AddProductForm from '../components/AddProductForm';
import Navbar from '../components/Navbar';
import Category from '../components/CategoryDropdown';
import CategoryDropdown from '../components/CategoryDropdown';
import { CartContext } from '../context/CartProvider';





const Dashboard = () => {

    const [products, setProducts] = useState<product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isError, setIsError] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')
    const [filtered, setFiltered] = useState<product[]>([])
    const [selectedCategory, setselectedCategory] = useState<string>('')
    const {cartItems,addToCart} = useContext(CartContext)

useEffect (() => {
    const getProducts = async () =>{
        try{
            const response = await fetch('https://dummyjson.com/products')
            if(!response.ok){
            setIsError(true);
            setIsLoading(false)
            return
            }
            else{
            const data : product[] = await response.json() 
            setProducts(data.products);
            }
        }
        catch{
            setIsError(true)
        }
        finally{
            setIsLoading(false)
        }
        
    }   
    getProducts();
   
},[])

useEffect(() => {
    let data = [...products]
        if(search !== ''){
            data = data.filter((p) => {
           return p.title.toLowerCase().includes(search.toLowerCase())
        })
        }
        if(selectedCategory !== ''){
            data = data.filter((p) => p.category === selectedCategory) 
        }
    else {
        setFiltered(products);
        }

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
    <div className='bg-blue'>
        <Navbar/>
        <div>
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
     <AddProductForm/>
    </div>
  )
}

export default Dashboard