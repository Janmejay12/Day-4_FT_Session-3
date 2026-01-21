import React, { useEffect, useState } from 'react'
import type {product} from '../product'
import ProductCard from '../components/ProductCard';
import AddProductForm from '../components/AddProductForm';
import Navbar from '../components/Navbar';





const Dashboard = () => {

    const [products, setProducts] = useState<product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isError, setIsError] = useState<boolean>(false)

useEffect (() => {
    const getProducts = async () =>{
        try{
            const response = await fetch('https://dummyjson.com/products')
            if(!response.ok){
            setIsError(true);
            }
            const parsedProductlist : product[] = await response.json() 
            setProducts(parsedProductlist);
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

// useEffect(() => {
//     localStorage.setItem('products', JSON.stringify(products));
// },[products])

    // if(isLoading){
    //     return <p>Products Loading</p>
    // }

    //  if(isError){
    //     return <p>Error fetching products</p>
    // }
    // if(products.length === 0){
    //     return <p>No products found</p>
    // }




  return (
    <div className='bg-blue'>
        <Navbar/>
        <div>
            <ul>
                {products && products.map((product) => (
                <div key = {product.id}>
                    {product.name}
                    {/* <ProductCard product={product}/> */}
                </div>
            ))} 
            </ul>
            
        </div>
     <AddProductForm/>
    </div>
  )
}

export default Dashboard
