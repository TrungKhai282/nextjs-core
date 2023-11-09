import { CategoryType } from "@/stores/category/models";
import useAxios from "./use-axios";

const categoryEnpoint = "/category";

export const getAllCategory = async () => {
  const response = await useAxios.get<CategoryType[]>(categoryEnpoint);
  return response;
};
