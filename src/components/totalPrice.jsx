import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import style from "./totalprice.module.css";
import { CartStore } from "../store/cartStore";
import { useContext } from "react";
const totalPrice = () => {
  let cartValue = 0;
  const { cartList } = useContext(CartStore);
  cartList.forEach((item) => {
    let price = item.price;
    let newprice = price.replace(/,/g, "");
    cartValue += parseInt(newprice);
  });

  // console.log("your toal value in rupee is", cartValue);

  return (
    <div className={`${style.priceShowerTag} m-5`}>
      <div
        className={`alert alert-warning alert-dismissible fade show ml-5 ${style.alert}`}
        role="alert"
      >
        <strong>Hey Buddy!</strong> Your Cart value is Rs. {cartValue}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};
export default totalPrice;
