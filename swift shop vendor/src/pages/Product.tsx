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
    // Applied classes for a centered, padded container with a max width
    <div className="product-page border rounded container mx-auto p-4 max-w-lg">
      {/* Applied classes for title styling: larger text, bold font, margin */}
      <h3 className="text-3xl font-bold mb-4">{product && product.title}</h3>
      
      {/* Applied classes for consistent vertical spacing between paragraphs */}
      <p className="mb-2"><strong>Price:</strong> ${product && product.price.toFixed(2)}</p>
      <p className="mb-2"><strong>Category:</strong> {product &&product.category}</p>
      <p className="mb-4"><strong>Stock:</strong> {product && product.stock} units left</p>
      
      {/* Applied classes for button styling: padding, colors, hover effects, rounded corners */}
      <button className='mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
        Add to cart
      </button>
    </div>
  )
}

export default Product
