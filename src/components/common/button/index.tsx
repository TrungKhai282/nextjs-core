import clsx from "clsx";
import React from "react";
import style from "./index.module.scss";

type ButtonProps = {
  text: React.ReactNode;
  className?: string;
  type?: "primary" | "outline" | "default" | "primary-outline";
};

const Button = (props: ButtonProps) => {
  const { text, className, type, ...elementProps } = props;

  return (
    <button
      {...elementProps}
      className={clsx(style.button, style[type ?? "default"], className)}
    >
      {text}
    </button>
  );
};

export default Button;
