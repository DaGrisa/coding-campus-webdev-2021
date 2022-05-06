import React, { ReactElement } from "react";
import "./Card.css";

interface CardProps {
  children: ReactElement;
}

const Card = (props: CardProps) => {
  return <div className="card">{props.children}</div>;
};

export default Card;
