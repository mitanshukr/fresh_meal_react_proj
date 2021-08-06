import CartIcon from "./CartIcon";
import style from "./HeaderCartBtn.module.css";
import { cartContext } from "../../../ContextStore/context-store";
import { useContext } from "react";

const HeaderCartBtn = (props) => {
const useCartContext = useContext(cartContext);


  const btnClasses = style.button + " " + style.bump;
  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{useCartContext.items.length}</span>
    </button>
  );
};

export default HeaderCartBtn;
