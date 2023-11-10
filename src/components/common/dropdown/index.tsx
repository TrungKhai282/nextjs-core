"use client";

import clsx from "clsx";
import React from "react";
import style from "./index.module.scss";

type Item = {
  key: string;
  label: React.ReactNode;
  value: string | number;
  disable?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick?: (key: string, value: string | number) => void;
};

type DropdownProps = {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  items: Item[];
};

const Dropdown = (props: DropdownProps) => {
  const { children, className, icon, items, ...elementProps } = props;
  return (
    <div {...elementProps} className={clsx(style.dropdown, className)}>
      {children}
      {icon && <div className={style.icon}>{icon}</div>}
      <div className={style.menu}>
        {items.map((item) => {
          return (
            <div
              onClick={() => {
                if (item.onClick) {
                  item.onClick(item.key, item.value);
                }
              }}
              key={item.key}
              className={clsx(style.item, { [style.disable]: item.disable })}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
