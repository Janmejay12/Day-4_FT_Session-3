import { useQuery } from "@tanstack/react-query";
import productService from "../services/productService";
import type { product } from "../product";

const ProductKeys = {
  all: ['products'] as const
};

const fetchProducts = async () : Promise<product[]> => {
  return await productService.getAllProducts()
};


export const useProducts = () => {
  return useQuery({
    queryKey : ProductKeys.all,
    queryFn : fetchProducts,
    staleTime : 5 * 60 * 1000,
  })
}