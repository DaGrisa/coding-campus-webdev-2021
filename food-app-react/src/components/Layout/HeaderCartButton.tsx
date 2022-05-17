import React, {useContext} from "react";
import "./HeaderCartButton.css";
import CartIcon from "./CartIcon";
import CartContext from "../../store/CartContext";

interface HeaderCartButtonProps {
    onShowCart: () => void;
}

export default function HeaderCartButton(props: HeaderCartButtonProps) {

    //context abrufen
    const cartCtx = useContext(CartContext);
    //total amount holen und unten statt X ausgeben
    const numberOfCartItems = cartCtx.items.reduce(
        (curNumber, item) => {
            return curNumber + item.quantity;
        }, 0
    );


    return (
        <button className="button" onClick={props.onShowCart}>
      <span className="icon">
        {" "}
          <CartIcon/>{" "}
      </span>
            <span>Your Cart</span>
            <span className="badge">{numberOfCartItems}</span>
        </button>
  );
}
