import React from "react";

function Card(props) {
  return (
    <div className="p-4 rounded-l m-10 shadow-black">{props.children}</div>
  );
}

export default Card;
