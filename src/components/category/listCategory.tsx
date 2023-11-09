"use client";
import { isSuccessResponse } from "@/common/utils/api.util";
import useStore from "@/stores";
import { CategoryType } from "@/stores/category/models";
import { useEffect, useState } from "react";

const ListCategory = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const callAllCategoryList = useStore((state) => state.callAllCategoryList);
  const allCategoryListResponse = useStore(
    (state) => state.allCategoryListRepsonse
  );
  const categoryList = allCategoryListResponse.response?.data || [];

  useEffect(() => {
    callAllCategoryList();
  }, []);

  useEffect(() => {
    if (isSuccessResponse(allCategoryListResponse)) {
      setShouldRender(true);
    }
  }, [allCategoryListResponse]);
  return (
    shouldRender && (
      <div>
        {categoryList.map((item: CategoryType) => {
          return (
            <div key={item.id}>
              ID: {item.id} - Name: {item.name}
            </div>
          );
        })}
      </div>
    )
  );
};

export default ListCategory;
