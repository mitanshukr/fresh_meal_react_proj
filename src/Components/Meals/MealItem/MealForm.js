import { useRef, useState } from "react";
import Input from "../../UI/Input";
import style from "./MealForm.module.css";

const MealForm = (props) => {
  const inputRef = useRef();
  const [buttonVal, setButtonVal] = useState("+ Add");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(+inputRef.current.value);
    setButtonVal("Added");

    setTimeout(() => {
      setButtonVal("+ Add");
    }, 200);
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
      <button>{buttonVal}</button>
    </form>
  );
};

export default MealForm;
