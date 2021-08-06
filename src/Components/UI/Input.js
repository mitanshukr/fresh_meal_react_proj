import { forwardRef } from "react";
import style from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <section className={style.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </section>
  );
});

export default Input;
