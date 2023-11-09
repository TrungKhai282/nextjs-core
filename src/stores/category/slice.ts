import { StateCreator } from "zustand";
import { CategoryState, initialStateAllCategoryList } from "./models";
import { getAllCategory } from "@/apis/category.api";

const categorySlice: StateCreator<CategoryState> = (set, get) => ({
  allCategoryListRepsonse: initialStateAllCategoryList,
  callAllCategoryList: () => {
    const state = get().allCategoryListRepsonse;

    set({
      allCategoryListRepsonse: {
        ...state,
        isLoading: true,
      },
    });
    getAllCategory()
      .then((res) => {
        set({
          allCategoryListRepsonse: {
            ...state,
            isLoading: false,
            response: res,
          },
        });
      })
      .catch((err) => {
        set({
          allCategoryListRepsonse: {
            ...state,
            isLoading: false,
            error: err,
          },
        });
      });
  },
});

export default categorySlice;
