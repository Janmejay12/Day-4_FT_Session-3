import { useQuery } from "@tanstack/react-query";
import productService from "../services/productService";

const categoryKeys = {
  all: ['categories'],
  detail: (id : number) => [...categoryKeys.all, id],
};

const fetchCategories = async () => {
  const response = await productService.getAllCategories()
  return response.data;
};


export const useCategories = () => {
  return useQuery(categoryKeys.all,fetchCategories)
}