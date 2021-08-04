import style from "./Input.module.css";

const Input = (props) => {
  return (
    <section className={style.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </section>
  );
};

export default Input;
