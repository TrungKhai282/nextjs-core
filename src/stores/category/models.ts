import { ResponseType } from "../type";

export type CategoryType = {
  createdAt: string;
  name: string;
  slug: string;
  id: string;
};

export type AllCategoryListResponse = ResponseType<CategoryType[]>;

export type CategoryState = {
  allCategoryListRepsonse: AllCategoryListResponse;
  callAllCategoryList: () => void;
};

export const initialStateAllCategoryList: AllCategoryListResponse = {
  isLoading: false,
  response: undefined,
};
