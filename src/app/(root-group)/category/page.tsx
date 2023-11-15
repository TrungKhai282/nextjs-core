"use client";
import useApiStore from "@/stores/useApiStore";
import { useEffect } from "react";

export default function CategoryPage() {
  const allCategoryListRepsonse = useApiStore(
    (state) => state.allCategoryListRepsonse
  );
  const callAllCategoryList = useApiStore((state) => state.callAllCategoryList);

  useEffect(() => {
    callAllCategoryList();
  }, []);

  console.log("allCategoryListRepsonse :>> ", allCategoryListRepsonse);
  return <>Category page</>;
}
