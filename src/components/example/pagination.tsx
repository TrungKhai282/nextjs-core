"use client";

import style from "./index.module.scss";
import Pagination from "../common/pagination";
import { useState } from "react";

const PaginationExample = () => {
  const [current, setCurrent] = useState(8);

  const handleChange = (page: number) => {
    setCurrent(page);
  };

  return (
    <div className={style.exampleContainer}>
      <div className={style.title}>Pagination:</div>
      <div className={style.exampleCol}>
        Basic:
        <Pagination current={current} onPageChange={handleChange} total={150} />
      </div>
      <div className={style.exampleCol}>
        Previous & Next:
        <Pagination
          onPageChange={handleChange}
          total={100}
          navigationText={{ previous: "Previous", next: "Next" }}
        />
      </div>
      <div className={style.exampleCol}>
        Handle page size:
        <Pagination
          onPageChange={handleChange}
          total={100}
          pageSize={15}
          listPageSize={[5, 10, 15, 20]}
        />
      </div>
    </div>
  );
};

export default PaginationExample;
