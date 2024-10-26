import { Product } from "../interfaces";
import { testSlicer } from "../utils/functions";
import CircleColors from "./CircleColors";
import ProductImg from "./ProductImg";
import Button from "./Ui/Button";

interface ProductCardProps {
  product: Product;
  setProductEdit: (product: Product) => void;
  openforedit: () => void;
  setProductEditIdx: (value: number) => void;
  idx: number;
  OpenConfirmModel: () => void;
}

const ProductCard = ({
  product,
  setProductEdit,
  openforedit,
  setProductEditIdx,
  idx,
  OpenConfirmModel,
}: ProductCardProps) => {
  const { title, description, imageUrl, price, colors, category } = product;

  const productColors = colors.map((color) => (
    <CircleColors key={color} color={color} />
  ));

  // Format price with commas using Intl.NumberFormat for clearer structure
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: parseFloat(price) % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(parseFloat(price));

  // Handlers
  const onEdit = () => {
    setProductEdit(product);
    openforedit();
    setProductEditIdx(idx);
  };

  // Delete modal
  const OnRemove = () => {
    OpenConfirmModel();
    setProductEdit(product);
  };

  return (
    <div className="flex flex-col border max-w-sm md:max-w-lg mx-auto md:mx-0 border-gray-200 rounded-lg overflow-hidden shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex-grow p-4 flex flex-col">
        <div className="w-full h-32 mb-2 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
          <ProductImg
            imgUrl={imageUrl}
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div className="w-full text-center">
          <h3 className="text-lg font-semibold mb-1 mt-2 truncate text-center dark:text-gray-100">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-1 flex-grow line-clamp-3 dark:text-gray-300">
            {testSlicer(description)}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-1 mt-2">
        {productColors}
      </div>

      <div className="flex items-center justify-between px-5 mt-2">
        <span className="font-bold text-lg text-emerald-500 dark:text-emerald-400">
          {formattedPrice}
        </span>
        <span className="font-medium text-lg dark:text-gray-300">
          {category.name}
        </span>
      </div>

      <div className="p-2">
        <div className="flex justify-between items-center space-x-2">
          <Button
            className="bg-emerald-600 flex-1 hover:bg-emerald-800 dark:bg-emerald-500 dark:hover:bg-emerald-700"
            width="w-full"
            onClick={onEdit}
          >
            EDIT
          </Button>
          <Button
            className="bg-red-600 flex-1 hover:bg-red-800 dark:bg-red-500 dark:hover:bg-red-700"
            width="w-full"
            onClick={OnRemove}
          >
            DELETE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
