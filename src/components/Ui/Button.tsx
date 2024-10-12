import { ReactNode, ButtonHTMLAttributes } from "react";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width = "w-full", ...rest }: Button) => {
  return (
    <button
      className={`${className} ${width} p-2 rounded-md text-white mt-1`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
