import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ApiStoreType } from "./type";
import categorySlice from "./category/slice";

const useApiStore = create<ApiStoreType>()(
  devtools((...a) => ({
    ...categorySlice(...a),
  }))
);

export default useApiStore;
