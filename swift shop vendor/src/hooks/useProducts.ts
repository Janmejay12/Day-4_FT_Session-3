import { useQuery } from "@tanstack/react-query";
import productService from "../services/productService";

const ProductKeys = {
  all: ['products'] as const
};

const fetchProducts = async () : Promise<string[]> => {
  return await productService.getAllProducts()
};


export const useProducts = () => {
  return useQuery({
    queryKey : ProductKeys.all,
    queryFn : fetchProducts,
    staleTime : 5 * 60 * 1000,
  })
}