import CartIcon from "./CartIcon";
import style from "./HeaderCartBtn.module.css";

const HeaderCartBtn = (props) => {
  const btnClasses = style.button + " " + style.bump;
  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>2</span>
    </button>
  );
};

export default HeaderCartBtn;
