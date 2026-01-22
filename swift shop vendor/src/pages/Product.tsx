import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import type { product } from '../product';
import productService from '../services/productService';
import { useParams } from 'react-router-dom';


const Product  : React.FC = () => {
  
  const[product, setProduct] = useState<product | null>(null)
  const {productId}  = useParams()
   useEffect (() => {
        const getProduct = async () =>{
                const id : number = Number(productId)
                const response = await productService.getProductById(id)                         
                setProduct(response);  
        }   
        getProduct();
       
    },[productId])
  return (
    <div className="product-page">
      <h3>{product && product.title}</h3>
      <p><strong>Price:</strong> ${product && product.price.toFixed(2)}</p>
      <p><strong>Category:</strong> {product &&product.category}</p>
      <p><strong>Stock:</strong> {product && product.stock} units left</p>
      <button className='mt-2 px-4 px-2 bg-blue-200'>Add to cart</button>
    </div>
  )
}

export default Product
