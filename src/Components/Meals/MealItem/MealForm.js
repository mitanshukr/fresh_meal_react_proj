import { useRef } from "react";
import Input from "../../UI/Input";
import style from "./MealForm.module.css";

const MealForm = (props) => {
  const inputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(inputRef.current.value);
  };

  return (
    <form className={style.form} onSubmit={formSubmitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          type: "number",
          id: `amount_${props.id}`,
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealForm;
