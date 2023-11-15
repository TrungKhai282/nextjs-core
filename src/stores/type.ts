import { CategoryState } from "./category/models";
import { AxiosResponse } from "axios";

export type ResponseType<T> = {
  isLoading: boolean;
  error?: any;
  response: AxiosResponse<T> | undefined;
};

export type ApiStoreType = CategoryState;
