import React from "react";

function Cart() {
  const cartItems = (
    <ul>
      {[
        {
          id: "1",
          name: "Pizza",
          quantity: 1,
          price: 12,
        },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>$59.99</span>
      </div>
      <div>
        <button>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
}

export default Cart;
