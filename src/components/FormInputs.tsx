import { ChangeEvent, useState } from "react";
import { FormInputList } from "../data";
import Inputs from "./Ui/Inputs";
import { Product } from "../interfaces";

const FormInputs = () => {
  const [product, setproduct] = useState<Product>({
    title: "",
    price: "",
    description: "",
    imageUrl: "",
    colors: [],
    category: {
      name: "",
    },
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setproduct({
      ...product,
      [name]: value,
    });
  };

  const formInputList = FormInputList.map((input) => (
    <div className="flex flex-col mb-3">
      <label
        htmlFor={input.id}
        className="text-gray-700 text-sm mb-1 font-medium"
      >
        {input.label}
      </label>
      <Inputs
        id={input.id}
        name={input.name}
        placeholder={input.placeholder}
        type={input.type}
        onChange={onChangeHandler}
        value={product[input.name]}
      />
    </div>
  ));
  return <div className="">{formInputList}</div>;
};

export default FormInputs;
