import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { categories, colors, FormInputList, productList } from "../data";
import ProductCard from "./ProductCard";
import Button from "./Ui/Button";
import Model from "./Ui/Model";
import { Product } from "../interfaces";
import Inputs from "./Ui/Inputs";
import { productValidation } from "../validation";
import ErrorMessage from "./ErrorMessage";
import CircleColors from "./CircleColors";
import { v4 as uuid } from "uuid";
import SelectCategory from "./Ui/SelectCategory";
import { Switch } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { TProductname } from "../types";
import toast, { Toaster } from "react-hot-toast";

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
  const [isOpenForEdit, setIsOpenForEdit] = useState(false);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [category, setCategory] = useState(categories[0]);
  const [enabled, setEnabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

  const [productEdit, setProductEdit] = useState<Product>(defaultProductObj);
  const [productEditIdx, setProductEditIdx] = useState<number>(0);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  });

  // ****** Handlers *********

  const open = () => {
    setCategory(categories[0]); // Set default category
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);
  const openforedit = useCallback(() => setIsOpenForEdit(true), []);
  const closeforedit = () => setIsOpenForEdit(false);
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
  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProductEdit({
      ...productEdit,
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

    const hasErrorMsg = Object.values(Errors.errors).some(
      (value) => value !== ""
    );

    if (hasErrorMsg) {
      setErrors(Errors.errors);
      toast.error("Please fix the errors before submitting.", {
        className: "dark:bg-red-600 dark:text-white p-3 bg-red-100",
        duration: 3000,
        position: "top-center",
        icon: "⚠️",
      });
      return;
    }

    setProductsAdd((prev) => [
      { ...product, id: uuid(), colors: tempColors, category },
      ...prev,
    ]);

    // Reset the form and close the modal upon successful submission
    setProduct(defaultProductObj);
    setTempColors([]);
    close();

    toast.success("Product has been added successfully!", {
      className: "dark:bg-green-600 dark:text-white p-3 bg-green-100",
      duration: 2500,
      position: "top-center",
      icon: "✅",
    });
  };

  //* edit product
  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageUrl, price } = productEdit;

    // Validate the product data
    const Errors = productValidation({
      title,
      description,
      imageUrl,
      price,
    });

    const hasErrorMsg =
      Object.values(Errors.errors).some((value) => value !== "") &&
      Object.values(Errors.errors).every((value) => value !== "");

    if (hasErrorMsg) {
      setErrors(Errors.errors);
      return;
    }

    const updatedProduct = [...productAdd];
    updatedProduct[productEditIdx] = {
      ...productEdit,
      colors: tempColors.concat(productEdit.colors),
      category,
    };
    setProductsAdd(updatedProduct);

    // Reset the form and close the modal upon successful submission
    setProductEdit(defaultProductObj);
    setTempColors([]);
    closeforedit();
  };

  const openConfirmDelete = useCallback(() => setIsOpenConfirmModal(true), []);
  const closeConfirmDelete = () => setIsOpenConfirmModal(false);

  const RemoveProductHandler = () => {
    const filterd = productAdd.filter(
      (product) => product.id !== productEdit.id
    );
    setProductsAdd(filterd);
    closeConfirmDelete();
    toast("Product has been deleted successfully", {
      className: "dark:bg-gray-800 dark:text-white p-2 bg-[#f1f1f1]",
      duration: 2000,
      icon: "✅",
    });
  };

  //* Form Inputs List
  const formInputList = FormInputList.map((input) => (
    <div className="flex flex-col mb-3" key={input.id}>
      <label
        htmlFor={input.id}
        className="text-gray-700 dark:text-white text-sm mb-1 font-medium"
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
        if (productEdit.colors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));

  const toggleTheme = useCallback(() => {
    document.documentElement.classList.toggle("dark");
  }, []);

  // make search
  const handelSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProduct = productAdd.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderProductEditWithErrMsg = (
    id: string,
    label: string,
    name: TProductname,
    placeholder: string
  ) => {
    return (
      <div className="flex flex-col mb-3">
        <label
          htmlFor={id}
          className="text-gray-700 dark:text-white text-sm mb-1 font-medium"
        >
          {label}
        </label>
        <Inputs
          id={id}
          name={name}
          placeholder={placeholder}
          type="text"
          onChange={onChangeEditHandler}
          value={productEdit[name]}
        />
        {/* Show error message if there's an error */}
        <ErrorMessage msg={errors[name]} />
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 dark:bg-gray-900 dark:text-gray-100">
      <div className="container ">
        <nav className="flex flex-col md:flex-row justify-between items-center space-x-5 p-4">
          {/* Search Input */}
          <Inputs
            placeholder="Type to search"
            className="w-full md:flex-1 border-2 rounded-md p-2 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
            onChange={handelSearch}
          />

          {/* Button for Adding Product */}
          <Button
            className="mt-4 md:mt-0 bg-indigo-500 hover:bg-indigo-800 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base lg:text-lg w-full md:w-fit md:ml-4 dark:bg-indigo-600 dark:hover:bg-indigo-800"
            onClick={open}
          >
            ADD PRODUCT
          </Button>

          {/* Theme Toggle and Icons */}
          <div className="mt-4 md:mt-0 flex items-center gap-2 md:gap-2">
            <Icon icon="emojione:sun" className="text-2xl" />
            <Switch
              onClick={toggleTheme}
              checked={enabled}
              onChange={setEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition data-[checked]:bg-blue-600"
            >
              <span className="w-4 h-4 transform translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
            <Icon icon="logos:moon" className="text-2xl" />
          </div>
        </nav>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-2 p-5 dark:bg-gray-900">
        {filteredProduct.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            setProductEdit={setProductEdit}
            openforedit={openforedit}
            idx={idx}
            setProductEditIdx={setProductEditIdx}
            OpenConfirmModel={openConfirmDelete}
          />
        ))}
      </div>

      {/* Modal for Adding Product */}
      <Model isOpen={isOpen} close={close} title="ADD A NEW PRODUCT">
        <form
          className="space-y-3 dark:bg-slate-700 dark:text-black"
          onSubmit={submitHandler}
        >
          {formInputList}
          <SelectCategory selected={category} setSelected={setCategory} />
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
              className="bg-[#ea3c3c] hover:bg-red-800 px-4 py-2"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Model>
      {/* model for edit product */}
      <Model isOpen={isOpenForEdit} close={closeforedit} title="EDIT PRODUCT">
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderProductEditWithErrMsg(
            "title",
            "Product Title",
            "title",
            "enter title"
          )}
          {renderProductEditWithErrMsg(
            "description",
            "Product description",
            "description",
            "enter description"
          )}
          {renderProductEditWithErrMsg(
            "imageUrl",
            "imageUrl",
            "imageUrl",
            "enter Url"
          )}
          {renderProductEditWithErrMsg(
            "price",
            "Product Price",
            "price",
            "enter price"
          )}

          <SelectCategory selected={category} setSelected={setCategory} />
          <div className="flex items-center justify-center space-x-1 mt-2">
            {productColors}
          </div>
          <div className="flex items-center flex-wrap gap-2 justify-center space-x-1 mt-2">
            {tempColors.concat(productEdit.colors).map((color) => (
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
            <Button className="bg-emerald-600 hover:bg-emerald-800 px-4 py-2">
              EDIT
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

      {/* Delete Confirmation Modal */}
      <Model
        isOpen={isOpenConfirmModal}
        close={closeConfirmDelete}
        title="Are you sure you want to delete this product?"
        description="Deleting this product will remove it from the database. This action cannot be undone."
      >
        <div className="flex justify-end space-x-4">
          <Button
            className="bg-red-600 hover:bg-red-800 dark:bg-red-500 dark:hover:bg-red-700"
            onClick={RemoveProductHandler}
          >
            Yes, Delete
          </Button>
          <Button
            className="bg-gray-600 hover:bg-gray-800 dark:bg-gray-400 dark:hover:bg-gray-600"
            onClick={closeConfirmDelete}
          >
            Cancel
          </Button>
        </div>
      </Model>
      <Toaster />
    </div>
  );
};

export default ProductPage;
