import { api } from "../apis/axios";
import type { product } from "../product";

 class productService{
    static async getAllProducts() : Promise<any>{
        const response = await api.get<any>('/')
        console.log("response : " ,response.data)
        if (response.data && Array.isArray(response.data.products)) {
        return response.data.products;}
    }

    static async getProductById(id : number) : Promise<product>{
        const response = await api.get<product>(`/${id}`)
        return response.data;
    }
    static async getAllCategories() : Promise<string[]>{
        const response = await api.get<string[]>('/category-list')
        return response.data;
    }
}
export default productService;
