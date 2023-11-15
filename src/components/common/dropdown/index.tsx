"use client";

import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
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
  placement?:
    | "top"
    | "top-left"
    | "top-right"
    | "bottom"
    | "bottom-left"
    | "bottom-right";
  click?: boolean;
};

const Dropdown = (props: DropdownProps) => {
  const {
    children,
    className,
    icon,
    items,
    placement,
    click,
    ...elementProps
  } = props;
  const [active, setActive] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const handleActive = () => !click && setActive(true);

  const handleUnActive = () => !click && setActive(false);

  const handleClickOutside = (e: any) => {
    if (click && boxRef.current && !boxRef.current.contains(e.target)) {
      setActive(false);
    }
  };

  const handleClickInside = () => click && setActive(true);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div
      {...elementProps}
      className={clsx(style.dropdown, className)}
      onMouseOver={handleActive}
      onMouseOut={handleUnActive}
      ref={boxRef}
      onClick={handleClickInside}
    >
      {children}
      {icon && <div className={style.icon}>{icon}</div>}
      <div
        className={clsx(
          style.menu,
          { [style.active]: active },
          style[placement ?? "bottom"]
        )}
      >
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
