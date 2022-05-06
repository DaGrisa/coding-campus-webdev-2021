import "./MealItem.css";
import MealItemForm from "./MealItemForm";

interface MealItemProps {
  name: string;
  description: string;
  price: number;
}

export default function MealItem(props: MealItemProps) {
  return (
    <li className="meal-item">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">€{props.price}</div>
      </div>
      <MealItemForm></MealItemForm>
    </li>
  );
};
