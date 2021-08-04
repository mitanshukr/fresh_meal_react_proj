import MEAL_DATA from "./MEALS_DATA";
import style from "./Meals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const Meals = (props) => {
  return (
    <section className={style.meals}>
      <Card>
        <ul>
          {MEAL_DATA.map((meal) => {
            return (
              <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default Meals;
