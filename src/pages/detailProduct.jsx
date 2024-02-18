import { useParams } from "react-router-dom";

const DetailProductPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Detail Product : {id}</h1>
    </div>
  );
};

export default DetailProductPage;
