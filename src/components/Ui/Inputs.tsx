import { InputHTMLAttributes } from "react";

interface InputsProps extends InputHTMLAttributes<HTMLInputElement> {}

const Inputs = ({ ...rest }: InputsProps) => {
  return (
    <input
      className="
        border-2 border-gray-500 
        px-3 py-2 
        w-full 
        rounded-md
        focus:outline-none focus:border-indigo-500 
        focus:ring-1 focus:ring-indigo-500 
        transition duration-300 
        text-sm md:text-base
        placeholder-gray-500
        shadow-sm shadow-white
      "
      {...rest}
    />
  );
};

export default Inputs;
