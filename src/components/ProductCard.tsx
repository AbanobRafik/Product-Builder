import { Product } from "../interfaces";
import { testSlicer } from "../utils/functions";
import CircleColors from "./CircleColors";
import ProductImg from "./ProductImg";
import Button from "./Ui/Button";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { title, description, imageUrl, price, colors, category } = product;

  const productColors = colors.map((color) => (
    <CircleColors key={color} color={color} />
  ));

  return (
    <div className="flex flex-col border max-w-sm md:max-w-lg mx-auto md:mx-0 border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div className="flex-grow p-4 flex flex-col">
        <div className="w-full h-32 mb-2 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
          <ProductImg
            imgUrl={imageUrl}
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div className="w-full text-center">
          <h3 className="text-lg font-semibold mb-1 mt-2 truncate text-center">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-1 flex-grow line-clamp-3">
            {testSlicer(description)}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-1 mt-2">
        {productColors}
      </div>

      <div className="flex items-center justify-between px-5 mt-2">
        <span className="font-bold text-lg text-emerald-500 ">${price}</span>
        <span className="font-medium text-lg">{category.name}</span>
      </div>

      <div className="p-2">
        <div className="flex justify-between items-center space-x-2">
          <Button className="bg-emerald-700 flex-1" width="w-full">
            EDIT
          </Button>
          <Button className="bg-red-700 flex-1" width="w-full">
            DELETE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
