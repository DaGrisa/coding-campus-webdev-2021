import { ChangeEvent, FormEvent, useState } from "react";
import { Meal } from "../../../App";
import "./MealItemForm.css";

interface MealItemFromProps {
  addCartItems: (meals: Meal[]) => void;
  meal: Meal;
}

export default function MealItemForm(props: MealItemFromProps) {
  const [itemCount, setItemCount] = useState(1);

  function handleOnChangeCount(event: ChangeEvent<HTMLInputElement>) {
    const count = parseInt(event.currentTarget.value);
    setItemCount(count);
  }

  function handleOnSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // prevent reload
    const cartItems = Array<Meal>(itemCount).fill(props.meal); // create array of x same meal items
    props.addCartItems(cartItems); // call function to add meal items
    setItemCount(1); // reset input field to default value
  }

  return (
    <form className="meal-item-form" onSubmit={handleOnSubmitForm}>
      <div className="input">
        <label htmlFor="amount">Amount</label>
        <input
          name="amount"
          type="number"
          min="1"
          max="5"
          onChange={handleOnChangeCount}
          value={itemCount}
        ></input>
      </div>
      <button type="submit">+ Add</button>
    </form>
  );
}
