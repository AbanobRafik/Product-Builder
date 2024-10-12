interface ProductImg {
  imgUrl: string;
  alt: string;
  className: string;
}

const ProductImg = ({ imgUrl, alt, className }: ProductImg) => {
  return <img src={imgUrl} alt={alt} className={className} />;
};

export default ProductImg;
