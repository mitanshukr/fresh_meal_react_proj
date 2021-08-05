import { Fragment } from "react";

import style from "./Header.module.css";
import mealsImage from "../../Assets/meals.jpg";
import HeaderCartBtn from "./HeaderCartBtn/HeaderCartBtn";

const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>ReactMeals</h1>
        <HeaderCartBtn onShowCart={props.onShowCart} />
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImage} alt="table full of meals" />
      </div>
    </Fragment>
  );
};

export default Header;
