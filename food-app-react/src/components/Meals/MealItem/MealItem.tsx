import {useContext} from "react";
import {Meal} from "../../../App";
import CartContext from "../../../store/CartContext";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";

interface MealItemProps {
    meal: Meal;
}

export default function MealItem(props: MealItemProps) {
    const cartCtx = useContext(CartContext);

    function addToCartHandler(quantity: number) {
        cartCtx.addItem({
            id: props.meal.id,
            name: props.meal.name,
            quantity: quantity,
            price: props.meal.price
        });
    }

    return (
        <li className="meal-item">
            <div>
                <h3>{props.meal.name}</h3>
                <div className="description">{props.meal.description}</div>
                <div className="price">€{props.meal.price}</div>
            </div>
            <MealItemForm
                meal={props.meal}
                onAddToCart={addToCartHandler}
      ></MealItemForm>
    </li>
  );
}
