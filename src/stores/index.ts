import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StoreType } from "./type";
import categorySlice from "./category/slice";

const useBoundStore = create<StoreType>()(
  persist(
    (...a) => ({
      ...categorySlice(...a),
    }),
    {
      name: "bound-store",
    }
  )
);

export default useBoundStore;
