import CartIcon from "./CartIcon";
import style from "./HeaderCartBtn.module.css";
import { cartContext } from "../../../ContextStore/context-store";
import { useContext, useEffect, useState } from "react";

const HeaderCartBtn = (props) => {
  const useCartContext = useContext(cartContext);
  const [bumpStyle, setBumpStyle] = useState(false);

  const { items } = useCartContext;

  const badgeCount = items.reduce((accum, item) => {
    return accum + item.amount;
  }, 0);

  let btnClasses = `${style.button} ${bumpStyle ? style.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBumpStyle(true);
    let timer = setTimeout(() => {
      setBumpStyle(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{badgeCount}</span>
    </button>
  );
};

export default HeaderCartBtn;
