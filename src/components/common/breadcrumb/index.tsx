import clsx from "clsx";
import React from "react";
import style from "./index.module.scss";
import Link from "next/link";

type Item = {
  title: React.ReactNode;
  href?: string;
};

type BreadcrumbProps = {
  items: Item[];
  className?: string;
  separator?: React.ReactNode;
};

const Breadcrumb = (props: BreadcrumbProps) => {
  const { items, className, separator, ...elementProps } = props;

  return (
    <div {...elementProps} className={clsx(style.breadcrumb, className)}>
      {items.map((item: Item, index: number) => {
        return (
          <div key={index} className={style.item}>
            {item.href ? (
              <Link href={item.href}>{item.title}</Link>
            ) : (
              <span>{item.title}</span>
            )}
            {index !== items.length - 1 && (
              <div className={style.separator}>{separator ?? "/"}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
