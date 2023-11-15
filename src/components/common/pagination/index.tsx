"use client";

import React, { useCallback, useMemo, useState } from "react";
import style from "./index.module.scss";
import clsx from "clsx";
import { ArrowLeftIcon, ArrowRightIcon, EllipsisHorizontalIcon } from "./icon";
import Dropdown from "../dropdown";
import Button from "../button";

type PaginationProps = {
  current?: number;
  total: number;
  pageSize?: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange?: (page: number) => void;
  navigationText?: {
    previous?: React.ReactNode;
    next?: React.ReactNode;
  };
  listPageSize?: number[];
};

const Pagination = (props: PaginationProps) => {
  const {
    current = 1,
    total,
    pageSize = 10,
    onPageChange,
    navigationText,
    listPageSize,
    ...elementProps
  } = props;
  const [pageCurrent, setPageCurrent] = useState(current);
  const [pageSizeCustom, setPageSizeCustom] = useState(pageSize);
  const totalPage = Math.ceil(total / pageSizeCustom);
  const startCurrent = 1;
  const countPageDisplay = 5;
  const maxPage = 10;

  const handleChangePage = useCallback(
    (page: number) => {
      setPageCurrent(page);
      if (onPageChange) {
        onPageChange(page);
      }
    },
    [onPageChange]
  );

  const handleClickPrevious = () => handleChangePage(pageCurrent - 1);

  const handleClickNext = () => handleChangePage(pageCurrent + 1);

  const handleChangePageSize = (value: string) => {
    const newPageSize = Number(value);
    let newCurrentPage = 1;
    if (newPageSize === pageSizeCustom) return;

    if (newPageSize > pageSizeCustom) {
      newCurrentPage = Math.ceil(pageCurrent / (newPageSize / 10));
    } else {
      const firstPosition = pageSizeCustom * (pageCurrent - 1) + 1;
      newCurrentPage = Math.round((firstPosition - 1) / newPageSize) + 1;
    }

    setPageSizeCustom(newPageSize);
    handleChangePage(newCurrentPage);
  };

  const listPage = useMemo(() => {
    let element = [];

    if (totalPage <= maxPage) {
      for (let index = 1; index <= totalPage; index++) {
        element.push(
          <button
            key={index}
            onClick={() => handleChangePage(index)}
            className={clsx({ [style.active]: pageCurrent === index })}
          >
            {index}
          </button>
        );
      }
    } else {
      let indexFor = pageCurrent - 2;

      if (pageCurrent <= countPageDisplay - 2) {
        indexFor = startCurrent;
      }

      if (pageCurrent > totalPage - countPageDisplay + 2) {
        indexFor = totalPage - countPageDisplay + 1;
      }

      const conditionFor = (index: number) => {
        if (pageCurrent <= countPageDisplay - 2) {
          return index <= countPageDisplay;
        } else {
          return index <= pageCurrent + 2 && index <= totalPage;
        }
      };

      for (let index = indexFor; conditionFor(index); index++) {
        element.push(
          <button
            key={index}
            onClick={() => handleChangePage(index)}
            className={clsx({ [style.active]: pageCurrent === index })}
          >
            {index}
          </button>
        );
      }
    }

    return element;
  }, [totalPage, pageCurrent, handleChangePage]);

  return (
    <div className={style.pagination} {...elementProps}>
      <button
        disabled={pageCurrent <= startCurrent}
        onClick={handleClickPrevious}
      >
        {navigationText && navigationText.previous ? (
          navigationText.previous
        ) : (
          <ArrowLeftIcon />
        )}
      </button>
      {totalPage > maxPage && pageCurrent > countPageDisplay - 2 && (
        <button onClick={() => handleChangePage(startCurrent)}>
          {startCurrent}
        </button>
      )}
      {totalPage > maxPage && pageCurrent > countPageDisplay - 1 && (
        <button disabled={true}>
          <EllipsisHorizontalIcon />
        </button>
      )}
      {listPage}
      {totalPage > maxPage &&
        pageCurrent <= totalPage - countPageDisplay + 1 && (
          <button disabled={true}>
            <EllipsisHorizontalIcon />
          </button>
        )}
      {totalPage > maxPage && pageCurrent < totalPage - 2 && (
        <button onClick={() => handleChangePage(totalPage)}>{totalPage}</button>
      )}
      <button disabled={pageCurrent >= totalPage} onClick={handleClickNext}>
        {navigationText && navigationText.next ? (
          navigationText.next
        ) : (
          <ArrowRightIcon />
        )}
      </button>
      {listPageSize && listPageSize.length > 0 && (
        <Dropdown
          items={listPageSize.map((item) => ({
            key: `${item}`,
            label: `${item} / page`,
            value: item,
            onClick: handleChangePageSize,
          }))}
          click
          className={style.pageSizeChange}
        >
          <Button type="outline">{pageSizeCustom} / page</Button>
        </Dropdown>
      )}
    </div>
  );
};

export default Pagination;
