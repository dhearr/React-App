import { useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPrice";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode } = useContext(DarkMode);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table
      className={`table-auto text-left border-separate border-spacing-5 ${
        isDarkMode && "text-slate-100"
      }`}
    >
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td>{product.title.substring(0, 15)}...</td>
                <td>
                  {product.price
                    .toLocaleString("en-EN", {
                      style: "currency",
                      currency: "USD",
                    })
                    .replace(",00", "")}
                </td>
                <td>{item.qty}</td>
                <td>
                  {(item.qty * product.price)
                    .toLocaleString("en-EN", {
                      style: "currency",
                      currency: "USD",
                    })
                    .replace(",00", "")}
                </td>
              </tr>
            );
          })}
        <tr ref={totalPriceRef}>
          <td colSpan={3}>
            <b> Total Price :</b>
          </td>
          <td>
            <b>
              {total
                .toLocaleString("en-EN", {
                  style: "currency",
                  currency: "USD",
                })
                .replace(",00", "")}
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
