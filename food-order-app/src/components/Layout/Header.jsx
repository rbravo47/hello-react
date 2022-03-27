import React from "react";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className="flex flex-row items-center justify-between px-40 py-5 bg-red-500">
        <h1 className="text-3xl text-white">React Meals</h1>
        <HeaderCartButton />
      </header>
      <div>image</div>
    </>
  );
}

export default Header;
