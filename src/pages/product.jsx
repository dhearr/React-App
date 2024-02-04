import CardProduct from "../components/fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp. 1.000.000",
    image: "/public/images/shoes.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facere voluptatum, voluptates nostrum ex illo, fugiat obcaecati perspiciatis porro doloribus corporis natus iure nesciunt neque perferendis velit veritatis laborum repellendus.",
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp. 2.000.000",
    image: "/public/images/shoes.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facere voluptatum, voluptates nostrum ex illo, fugiat obcaecati.",
  },
  {
    id: 3,
    name: "Sepatu Bekas",
    price: "Rp. 3.000.000",
    image: "/public/images/shoes.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facere voluptatum, voluptates nostrum ex illo.",
  },
];

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body title={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
