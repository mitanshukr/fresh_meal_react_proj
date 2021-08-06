import { useContext } from "react";
import { cartContext } from "../../../ContextStore/context-store";
import MealForm from "./MealForm";
import style from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const useCartContext = useContext(cartContext);

  const formDataHandler = (amount) => {
    const item = {
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    };
    useCartContext.addItem(item);
  };

  return (
    <li className={style.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>{price}</div>
      </div>
      <div>
        <MealForm id={props.id} onFormSubmit={formDataHandler} />
      </div>
    </li>
  );
};

export default MealItem;
