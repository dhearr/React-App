import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../elements/Button";
import { useSelector } from "react-redux";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        return acc + item.qty;
      }, 0);
      setTotalCart(sum);
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex h-20 items-center justify-end px-10 text-white bg-blue-900">
      {username}
      <Button variant="ml-5 bg-blue-500" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex p-2 bg-blue-500 rounded-md ml-5">{totalCart}</div>
    </div>
  );
};

export default Navbar;
