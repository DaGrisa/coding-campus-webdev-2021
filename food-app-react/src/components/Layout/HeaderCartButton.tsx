import React, { Fragment } from "react";
import "./HeaderCartButton.css";
import CartIcon from "./CartIcon";

const HeaderCartButton = () => {
  return (
      <button className="button">
        <span className="icon"> <CartIcon /> </span>
        <span>Your Cart</span>
        <span className="badge">0</span>
      </button>
  );
};

export default HeaderCartButton;
