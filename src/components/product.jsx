import { useContext } from "react";
// import { ProductStore } from "../store/productStore";
import style from "./product.module.css";
import { CartStore } from "../store/cartStore";

const product = ({
  id,
  title,
  brand,
  description,
  category,
  price,
  discount,
  stock,
  image,
}) => {
  const { addToCart } = useContext(CartStore);
  const handleAddToCart = (
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
    addToCart(
      id,
      title,
      brand,
      description,
      category,
      price,
      discount,
      stock,
      image
    );
  };
  return (
    <div className={style.card} style={{ width: "18rem" }}>
      <img src={image} className={`card-img-top ${style.img}`} alt="..." />
      <div className={`card-body mt-2 ${style.body}`}>
        <h5 className={`card-title ${style.title}`}>{title}</h5>
        <p className={`card-text text-left ${style.brand}`}>By {brand}</p>
        <p className={`card-text text-left ${style.price}`}>Rs.{price}</p>

        <div className={style.btncontainer}>
          <button type="button" className={`btn ${style.buyNow} `}>
            Buy Now
          </button>
          <button
            type="button"
            className={`btn ${style.cart}`}
            onClick={() =>
              handleAddToCart(
                id,
                title,
                brand,
                description,
                category,
                price,
                discount,
                stock,
                image
              )
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default product;
