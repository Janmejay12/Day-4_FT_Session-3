import { useQuery } from "@tanstack/react-query";
import productService from "../services/productService";

const categoryKeys = {
  all: ['categories'] as const
};

const fetchCategories = async () : Promise<string[]> => {
  return await productService.getAllCategories()
};


export const useCategories = () => {
  return useQuery({
    queryKey : categoryKeys.all,
    queryFn : fetchCategories,
    staleTime : 5 * 60 * 1000,
  })
}