import clsx from "clsx";
import React from "react";
import style from "./index.module.scss";

type TextProps = {
  children: React.ReactNode;
  className?: string;
  type?: "default" | "secondary" | "strong" | "italic";
};

const Text = (props: TextProps) => {
  const { children, className, type, ...elementProps } = props;

  return (
    <p
      {...elementProps}
      className={clsx(style.text, style[type ?? "default"], className)}
    >
      {children}
    </p>
  );
};

export default Text;
