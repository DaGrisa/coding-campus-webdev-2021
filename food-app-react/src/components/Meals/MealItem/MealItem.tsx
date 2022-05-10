import { Meal } from "../../../App";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";

interface MealItemProps {
  meal: Meal;
  addCartItems: (meals: Meal[]) => void;
}

export default function MealItem(props: MealItemProps) {
  return (
    <li className="meal-item">
      <div>
        <h3>{props.meal.name}</h3>
        <div className="description">{props.meal.description}</div>
        <div className="price">€{props.meal.price}</div>
      </div>
      <MealItemForm
        meal={props.meal}
        addCartItems={props.addCartItems}
      ></MealItemForm>
    </li>
  );
}
