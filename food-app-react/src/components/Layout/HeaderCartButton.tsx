import React, {useContext, useEffect, useState} from "react";
import "./HeaderCartButton.css";
import CartIcon from "./CartIcon";
import CartContext from "../../store/CartContext";

interface HeaderCartButtonProps {
    onShowCart: () => void;
}

export default function HeaderCartButton(props: HeaderCartButtonProps) {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    //context abrufen
    const cartCtx = useContext(CartContext);
    //total amount holen und unten statt X ausgeben
    const numberOfCartItems = cartCtx.items.reduce(
        (curNumber, item) => {
            return curNumber + item.quantity;
        }, 0
    );

    const { items } = cartCtx;

    const btnClasses = `button ${btnIsHighlighted ? 'bump' : '' }`;

    useEffect(() =>{
        if(items.length === 0){ 
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false);
        }, 300);

        // cleanup function
        return () =>{
            clearTimeout(timer); 
        }
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onShowCart}>
      <span className="icon">
        {" "}
          <CartIcon/>{" "}
      </span>
            <span>Your Cart</span>
            <span className="badge">{numberOfCartItems}</span>
        </button>
  );
}
