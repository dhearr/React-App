import Button from "../elements/Button";

const CardProduct = (props) => {
  const { children } = props;

  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;

  return (
    <a href="">
      <img src={image} alt="shoes" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { title, children } = props;

  return (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-xs font-normal text-gray-400">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;

  return (
    <div className="flex item-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button variant="bg-blue-600">Add to cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
