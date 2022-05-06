import React from "react";
import "./Header.css";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <h1>Food-Order</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src="header.jpg" />
      </div>
    </Fragment>
  );
};

export default Header;
