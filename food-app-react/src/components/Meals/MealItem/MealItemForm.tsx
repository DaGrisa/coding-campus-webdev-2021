import {ChangeEvent, FormEvent, useState} from "react";
import {Meal} from "../../../App";
import "./MealItemForm.css";

interface MealItemFromProps {
  meal: Meal;
  onAddToCart: (itemCount: number) => void;
}

export default function MealItemForm(props: MealItemFromProps) {
  const [itemCount, setItemCount] = useState(1);

  function handleOnChangeCount(event: ChangeEvent<HTMLInputElement>) {
    const count = parseInt(event.currentTarget.value);

    setItemCount(count);
  }

  function handleOnSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // prevent reload

    if (itemCount < 1 || itemCount > 5) {
      return;
    }

    props.onAddToCart(itemCount);
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
