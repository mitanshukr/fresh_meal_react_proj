import { useContext } from "react";
import { cartContext } from "../../ContextStore/context-store";
import Modal from "../UI/Modal";
import style from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const useCartContext = useContext(cartContext);
  const hasCartItems = useCartContext.items.length > 0;

  const addItemHandler = (item) => {
      useCartContext.addItem({...item, amount: 1});
  };

  const removeItemHandler = (id) => {
    useCartContext.removeItem(id);
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={style["cart-items"]}>
        {useCartContext.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onAdd={addItemHandler.bind(null, item)}
              onRemove={removeItemHandler.bind(null, item.id)}
            />
          );
        })}
      </div>
      <div className={style.total}>
        <span>Total Amount</span>
        <span>${useCartContext.totalPrice.toFixed(2)}</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.onClose}>
          Cancel
        </button>
        {hasCartItems && <button className={style["button"]}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
