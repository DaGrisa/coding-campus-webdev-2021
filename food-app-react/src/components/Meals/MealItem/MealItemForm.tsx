import "./MealItemForm.css";

export default function MealItemForm() {
  return (
    <form className="meal-item-form">
      <div className="input">
        <label htmlFor="amount">Amount</label>
        <input name="amount" type="number" min="1" max="5"></input>
      </div>
      <button>+ Add</button>
    </form>
  );
}
