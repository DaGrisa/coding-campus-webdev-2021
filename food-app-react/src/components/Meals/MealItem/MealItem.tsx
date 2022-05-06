import "./MealItem.css";

interface MealItemProps {
  name: string;
  description: string;
  price: number;
}

const MealItem = (props: MealItemProps) => {
  return (
    <li className="meal-item">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">€{props.price}</div>
      </div>
      <div>FORM</div>
    </li>
  );
};

export default MealItem;
