import { createContext, useReducer } from "react";
import cartList from "../components/cartList";

export const CartStore = createContext({
  cartList: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

const cardReducer = (currCartList, action) => {
  if (action.type == "ADD_TO_CART") {
    currCartList = [action.payload, ...currCartList];
    // console.log("inside currcardlist", currCartList);
    return currCartList;
  } else if (action.type == "REMOVE_FROM_CART") {
    const updatedCartList = currCartList.filter(
      (item) => item.id !== action.payload
    );
    console.log("after deleting....", updatedCartList);

    return updatedCartList;
  }
};

const CartProvider = ({ children }) => {
  // creating useReduce
  const [cartList, dispatchCart] = useReducer(cardReducer, DEFAULT_LIST);

  const addToCart = (
    id,
    title,
    brand,
    description,
    category,
    price,
    discount,
    stock,
    image
  ) => {
    const cartAction = {
      type: "ADD_TO_CART",
      payload: {
        id,
        title,
        brand,
        description,
        category,
        price,
        discount,
        stock,
        image,
      },
    };
    dispatchCart(cartAction);
  };
  const removeFromCart = (id) => {
    const removeAction = {
      type: "REMOVE_FROM_CART",
      payload: id,
    };
    dispatchCart(removeAction);
  };

  return (
    <CartStore.Provider value={{ cartList, addToCart, removeFromCart }}>
      {children}
    </CartStore.Provider>
  );
};
let DEFAULT_LIST = [];
export default CartProvider;
