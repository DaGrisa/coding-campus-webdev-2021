import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

export interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

export default function App() {
  //add state for cartmodal
  const [showCart, setShowCart] = useState(false);


  function showCartHandler() {
    setShowCart(true);
  }

  function hideCartHandler() {
    setShowCart(false);
  }

  return (
      <CartProvider>
        {showCart && <Cart onHideCart={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <main>
          <Meals/>
        </main>
      </CartProvider>
  );
}
