import React, { Fragment } from "react";
import "./HeaderCartButton.css";
import CartIcon from "./CartIcon";
import { Meal } from "../../App";

interface HeaderCartButtonProps {
  cart: Meal[];
}

export default function HeaderCartButton(props: HeaderCartButtonProps) {
  return (
    <button className="button">
      <span className="icon">
        {" "}
        <CartIcon />{" "}
      </span>
      <span>Your Cart</span>
      <span className="badge">{props.cart.length}</span>
    </button>
  );
};
