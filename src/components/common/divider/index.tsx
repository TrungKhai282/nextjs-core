import clsx from "clsx";
import React from "react";
import style from "./index.module.scss";

type DividerProps = {
  children?: React.ReactNode;
  className?: string;
  textPosition?: "start" | "end" | "center";
};

const Divider = (props: DividerProps) => {
  const { children, className, textPosition, ...elementProps } = props;

  return (
    <div
      {...elementProps}
      className={clsx(style.divider, style[textPosition ?? "start"], className)}
    >
      {children && <span>{children}</span>}
    </div>
  );
};

export default Divider;
