import CardProduct from "../components/fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/public/images/shoes.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          facere voluptatum, voluptates nostrum ex illo, fugiat obcaecati
          perspiciatis porro doloribus corporis natus iure nesciunt neque
          perferendis velit veritatis laborum repellendus.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/public/images/shoes.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          facere voluptatum, voluptates nostrum ex illo, fugiat obcaecati
          perspiciatis porro doloribus corporis natus iure nesciunt neque
          perferendis velit veritatis laborum repellendus.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
