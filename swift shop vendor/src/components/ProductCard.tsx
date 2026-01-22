import React from 'react'
import type {product} from '../product'
import { Link } from 'react-router-dom';
interface ProductCardProps{
    product : product;
}

const ProductCard : React.FC<ProductCardProps> = ({product}) =>  {
  return (
    <Link to={`product/${product.id}`}>
      <div className='border rounded-lg p-4 '>
        
          <h2 className='text-lg font-bold mb-3'>{product.title}</h2>
          <h2 className='text-blue-700'>{product.price}</h2>
          <h2 className='text-blue-700'>{product.category}</h2>
          <button className='mt-2 px-4 px-2 bg-blue-200'>Add to cart</button>
        
      </div>
    </Link>
    
  )
}

export default ProductCard
