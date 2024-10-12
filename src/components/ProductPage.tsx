import { useState } from "react";
import { productList } from "../data";
import ProductCard from "./ProductCard";
import Button from "./Ui/Button";
import Model from "./Ui/Model";
import FormInputs from "./FormInputs";

const ProductPage = () => {
  /* State */
  const [isOpen, setIsOpen] = useState(false);

  /* Handlers */
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const products = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <div className="container mx-auto p-4">
      {/* ADD PRODUCT Button */}
      <div className="flex justify-center mb-4">
        <Button
          className="bg-indigo-500 hover:bg-indigo-800 px-6 py-3 text-sm md:text-base lg:text-lg"
          onClick={open}
        >
          ADD PRODUCT
        </Button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-2 p-5">
        {products}
      </div>

      {/* Modal for Adding Product */}
      <Model isOpen={isOpen} close={close} title="ADD A NEW PRODUCT">
        <div className="space-y-3">
          {FormInputs()}
          <div className="flex items-center justify-center space-x-3 mt-4">
            <Button className="bg-indigo-500 hover:bg-indigo-800 px-4 py-2">
              Submit
            </Button>
            <Button className="bg-red-500 hover:bg-red-800 px-4 py-2">
              Cancel
            </Button>
          </div>
        </div>
      </Model>
    </div>
  );
};

export default ProductPage;
