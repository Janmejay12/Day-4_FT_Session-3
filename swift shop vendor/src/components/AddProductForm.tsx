import { useForm } from 'react-hook-form'
import type { product } from '../product';


const AddProductForm = () => {
   
    const {register, handleSubmit,reset,formState:{errors} } = useForm({defaultValues:{
        name : '',
        price : 0,
        stock : 0

    }});
   
    const onSubmit = (data : any) => {
        const productList = localStorage.getItem('products');
        const parsedProductlist : product[]= productList ?  JSON.parse('productlist') : [];
        parsedProductlist.push(data)
        localStorage.setItem('products',JSON.stringify(parsedProductlist))
        alert('Product added succesfully')
        reset()
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="name">Product name :</label>
            <input type="text" {...register("name",{ required: 'Product name is required...'})} />
        </div>

        <div>
            <label htmlFor="price">Product price :</label>
            <input type="text" {...register("price",{ required: 'Product price is required...',min:{
            value : 1,
            message : 'price cant be zero'
        }})}/>
        </div>
        
        <div>
            <label htmlFor="stock">Product stock :</label>
            <input type="text" {...register("stock",{ required: 'Product stock is required...'})}/>
        </div>
        
        <button>Add Product</button>
      </form>
    </div>
  )
}

export default AddProductForm
