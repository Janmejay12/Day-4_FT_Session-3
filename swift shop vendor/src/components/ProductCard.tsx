import React from 'react'
import type {product} from '../product'
interface ProductCardProps{
    product : product;
}

const ProductCard : React.FC<ProductCardProps> = ({product}) =>  {
  return (
    <div>
      <div>
        <h2>{product.name}</h2>
        <h2>{product.price}</h2>
        <h2>{product.brand}</h2>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
