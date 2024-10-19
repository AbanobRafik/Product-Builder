// * product == validation object
/**
 * @param {object} product - the product object that been validated
 * @return  the errors object
 * */
export const productValidation = (product: {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}) => {
  const errors: {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  };

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length >= 100
  ) {
    errors.title = "Title must be between 10 and 100 characters";
  }

  if (
    !product.description.trim() ||
    product.description.length < 20 ||
    product.description.length >= 300
  ) {
    errors.description = "Description must be between 20 and 300 characters";
  }

  const imgUrlRegExp =
    /\b(?:http|https|ftp):\/\/\S+\.(?:jpg|jpeg|png|gif|bmp|svg)\b/.test(
      product.imageUrl
    );

  if (!product.imageUrl.trim() || !imgUrlRegExp) {
    errors.imageUrl = "Valid Image URL is required!";
  }

  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "Valid Price is required!";
  }

  return { errors };
};
