import { HTMLAttributes } from "react";

interface CircleColors extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColors = ({ color, ...rest }: CircleColors) => {
  return (
    <span
      className={`block w-5 h-5 rounded-full cursor-pointer`}
      style={{ backgroundColor: color }}
      {...rest}
    ></span>
  );
};

export default CircleColors;
