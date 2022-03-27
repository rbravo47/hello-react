import React from "react";

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li>
      <div className="flex flex-col">
        <h3>{props.name}</h3>
        <span>{props.description}</span>
        <span>{price}</span>
      </div>
      <div></div>
    </li>
  );
}

export default MealItem;
