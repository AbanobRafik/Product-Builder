import { ChangeEvent, FormEvent, useState } from "react";
import { colors, FormInputList, productList } from "../data";
import ProductCard from "./ProductCard";
import Button from "./Ui/Button";
import Model from "./Ui/Model";
import { Product } from "../interfaces";
import Inputs from "./Ui/Inputs";
import { productValidation } from "../validation";
import ErrorMessage from "./ErrorMessage";
import CircleColors from "./CircleColors";
import { v4 as uuid } from "uuid";

const ProductPage = () => {
  const defaultProductObj: Product = {
    title: "",
    price: "",
    description: "",
    imageUrl: "",
    colors: [],
    category: {
      name: "",
    },
  };

  /* State */
  const [product, setProduct] = useState<Product>(defaultProductObj);
  const [productAdd, setProductsAdd] = useState<Product[]>(productList);
  const [isOpen, setIsOpen] = useState(false);
  // ** this is form store temp colors
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  });

  // ****** Handlers *********
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });

    // Reset the error state for that specific field
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    close();
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageUrl, price } = product;

    // Validate the product data
    const Errors = productValidation({
      title,
      description,
      imageUrl,
      price,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMsg) {
      setErrors(Errors.errors);
      return;
    }

    setProductsAdd((prev) => [
      { ...product, id: uuid(), colors: tempColors },
      ...prev
    ]);

    // Reset the form and close the modal upon successful submission
    setProduct(defaultProductObj);
    setTempColors([]);
    close();
  };

  //* render productList
  const products = productAdd.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  //* Form Inputs List
  const formInputList = FormInputList.map((input) => (
    <div className="flex flex-col mb-3" key={input.id}>
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
      {/* Show error message if there's an error */}
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const productColors = colors.map((color) => (
    <CircleColors
      key={color}
      color={color}
      onClick={() => {
        // this is for make toggle in color I chosed
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));

  return (
    <div className="container mx-auto p-4">
      {/* ADD PRODUCT Button */}
      <div className="container ">
        <nav className="flex justify-between items-center">
          <Inputs
            placeholder="type to search"
            className="py-3 flex-1 border-2 rounded-md p-2 text-sm"
          />
          <Button
            className="bg-indigo-500 hover:bg-indigo-800 px-6 py-3 text-sm md:text-base lg:text-lg ml-4"
            onClick={open}
            width="w-fit"
          >
            ADD PRODUCT
          </Button>
        </nav>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-2 p-5">
        {products}
      </div>

      {/* Modal for Adding Product */}
      <Model isOpen={isOpen} close={close} title="ADD A NEW PRODUCT">
        <form className="space-y-3" onSubmit={submitHandler}>
          {formInputList}
          <div className="flex items-center justify-center space-x-1 mt-2">
            {productColors}
          </div>
          <div className="flex items-center flex-wrap gap-2 justify-center space-x-1 mt-2">
            {tempColors.map((color) => (
              <span
                style={{ backgroundColor: color }}
                className="p-2 text-xs text-white rounded-md"
                key={color}
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-3 mt-4">
            <Button className="bg-indigo-500 hover:bg-indigo-800 px-4 py-2">
              Submit
            </Button>
            <Button
              className="bg-red-500 hover:bg-red-800 px-4 py-2"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Model>
    </div>
  );
};

export default ProductPage;
