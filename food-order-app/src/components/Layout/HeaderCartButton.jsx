import React from "react";

function HeaderCartButton(props) {
  return (
    <button className="flex flex-row space-x-3 items-center bg-red-900 p-4 px-10 rounded-3xl text-white">
      <span>icon</span>
      <span>Your Cart</span>
      <span className="bg-red-500 py-1 px-3 rounded-full">3</span>
    </button>
  );
}

export default HeaderCartButton;
