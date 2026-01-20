import React from 'react'
import type {product} from '../product'
import ProductCard from '../components/ProductCard';
import AddProductForm from '../components/AddProductForm';

  const products : product[] = [{
    name : "Trekking Shoes",
    id : 1,
    price : 5500, 
    brand : "decathlon",
    stock : 15
},
{
    name : "Jacket",
    id : 2,
    price : 8500, 
    brand : "Simond",
    stock : 3
},
{
    name : "Sun glasses",
    id : 3,
    price : 4200, 
    brand : "Oakley",
    stock : 0
},
];
localStorage.setItem('products', JSON.stringify(products));

const Dashboard = () => {
  return (
    <div>
        <div>
             {products.map((product) => (
            <div key = {product.id}>
                <ProductCard product={product}/>
            </div>
            ))}
        </div>
     <AddProductForm/>
    </div>
  )
}

export default Dashboard
