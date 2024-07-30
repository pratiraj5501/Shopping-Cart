import { useContext } from "react";
import style from "./cart.module.css";
import { CartStore } from "../store/cartStore";

const cart = ({ id, title, image, brand, price }) => {
  const { removeFromCart } = useContext(CartStore);
  const handleRemoveBtn = (id) => {
    removeFromCart(id);
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
            onClick={() => handleRemoveBtn(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default cart;
