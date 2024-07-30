import cartPik from "../assets/images/cartpik.jpg";
import style from "./emptyCart.module.css";
const emptyCart = () => {
  console.log(cartPik);
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.bg}>
          <img src={cartPik} alt="" />
          <p className="m-5">Hey Buddy! You haven't looked product!!!</p>
        </div>
        <div className={style.blob}></div>
      </div>
    </div>
  );
};
export default emptyCart;
