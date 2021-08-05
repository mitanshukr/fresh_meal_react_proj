import Modal from "../UI/Modal";
import style from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [
    {
      id: "x1",
      name: "Sushi",
      amount: 2,
      price: 23.21,
    },
  ];

  return (
    <Modal>
      <div className={style["cart-items"]}>
        {cartItems.map((item) => {
          return (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <span>{item.amount}</span>
              <span>{item.price}</span>
            </li>
          );
        })}
      </div>
      <div className={style.total}>
        <span>Total Amount</span>
        <span>35.43</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]}>Cancel</button>
        <button className={style["button"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
