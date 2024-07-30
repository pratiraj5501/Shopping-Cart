import { act, createContext, useReducer } from "react";
// import cart from "../components/cart";
import iphone12Image from "../assets/images/iphone-12.jpg";
import samsumgS20Image from "../assets/images/samsung-galaxy-s20.jpg";
import galaxyBuds3 from "../assets/images/samsung-galaxy-buds.jpg";
import cartList from "../components/cartList";

export const ProductStore = createContext({
  listItems: [],
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

const productReducer = (currProductList, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let newProduct = currProductList.find(
        (item) => item.id == action.payload.id
      );
      if (!cartItems.includes(newProduct)) {
        cartItems.unshift(newProduct);
      }
      return currProductList;

    case "REMOVE_FROM_CART":
      cartItems = cartItems.filter((item) => item.id == action.payload.id);
      return cartItems;

    default:
  }
};

const ProductProvider = ({ children }) => {
  const [listItems, dispatchProduct] = useReducer(productReducer, DEFAULT_LIST);

  const addToCart = (id) => {
    const newProductAction = {
      type: "ADD_TO_CART",
      payload: { id },
    };
    dispatchProduct(newProductAction);
  };
  const removeFromCart = (id) => {
    const newProductAction = {
      type: "REMOVE_FROM_CART",
      payload: {
        id,
      },
    };
    dispatchProduct(newProductAction);
  };

  return (
    <ProductStore.Provider
      value={{ listItems, cartItems, addToCart, removeFromCart }}
    >
      {children}
    </ProductStore.Provider>
  );
};
let cartItems = [];
const DEFAULT_LIST = [
  {
    id: 104,
    title: "iphone 12",
    description: "best mobile phone for camera and gaming  Rs.",
    category: "Smartphones",
    price: "85,895 Rs.",
    discount: "12.05%",
    stock: "150",
    brand: "apple",
    cart: "0",
    image: iphone12Image,
  },
  {
    id: 109,
    title: "samsung S 20 Ultra",
    description: "Samsung premium mobile phone for best camear quality",
    category: "Smartphones",
    price: "75,999 Rs.",
    discount: "9%",
    stock: "56",
    brand: "samsung",
    cart: "0",
    image: samsumgS20Image,
  },
  {
    id: 945,
    title: "Galaxy buds 3",
    description: "Samsung buds are the buds with great sound quality",
    category: "buds",
    price: "14,999 Rs.",
    discount: "5%",
    stock: "41",
    brand: "samsung",
    cart: "0",
    image: galaxyBuds3,
  },
];
export default ProductProvider;
