import { useContext } from "react";
import { cartContext } from "../../ContextStore/context-store";
import Modal from "../UI/Modal";
import style from "./Cart.module.css";

const Cart = (props) => {
  const useCartContext = useContext(cartContext);

  let totalPrice = 0;
  useCartContext.items.forEach(item => {
    totalPrice += item.amount * item.price;
  });

  return (
    <Modal onClose={props.onClose}>
      <div className={style["cart-items"]}>
        {useCartContext.items.map((item) => {
          return (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <span>{item.amount}-</span>
              <span>{item.price}</span>
            </li>
          );
        })}
      </div>
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.onClose}>
          Cancel
        </button>
        <button className={style["button"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
