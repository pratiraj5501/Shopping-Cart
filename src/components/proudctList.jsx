import { useContext } from "react";
import Product from "./product";
import { ProductStore } from "../store/productStore";
import { CartStore } from "../store/cartStore";
const proudctList = () => {
  const { listItems } = useContext(ProductStore);
  const { cartList } = useContext(CartStore);
  // console.log("printing..", cartList);

  return (
    <div
      className="productContainer"
      style={{
        display: "flex",
        width: "80%",
        justifyContent: "space-evenly",
      }}
    >
      {listItems.map((product, index) => (
        <Product
          key={index}
          id={product.id}
          title={product.title}
          brand={product.brand}
          description={product.description}
          category={product.category}
          price={product.price}
          discount={product.discount}
          stock={product.stock}
          image={product.image}
        ></Product>
      ))}
    </div>
  );
};
export default proudctList;
