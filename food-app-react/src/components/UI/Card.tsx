import React, { ReactElement } from "react";
import "./Card.css";

interface CardProps {
  children: ReactElement;
}

export default function Card(props: CardProps) {
  return <div className="card">{props.children}</div>;
}
