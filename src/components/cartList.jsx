import { useContext } from "react";
import style from "./cart.module.css";
import Cart from "./cart";
import EmptyCart from "./emptyCart";
import { CartStore } from "../store/cartStore";
import TotalPrice from "./totalPrice";

const cartLists = () => {
  const { cartList } = useContext(CartStore);

  return (
    <div className={style.cartContainer}>
      <TotalPrice />
      {cartList.length > 0 ? (
        cartList.map((item, index) => (
          <Cart
            id={item.id}
            title={item.title}
            image={item.image}
            brand={item.brand}
            price={item.price}
            key={index}
          ></Cart>
        ))
      ) : (
        <EmptyCart></EmptyCart>
      )}
    </div>
  );
};
export default cartLists;
