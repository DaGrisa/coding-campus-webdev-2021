import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

export interface Meal {}

export default function App() {
  const [cart, setCart] = useState<Meal[]>([]);

  function addCartItems(meals: Meal[]){
    setCart([...cart, ...meals]);
  }

  return (
    <Fragment>
      <Header cart={cart} />
      <main>
        <Meals /*addCartItems={addCartItems}*/ />
      </main>
    </Fragment>
  );
}
