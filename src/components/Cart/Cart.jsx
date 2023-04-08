import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;

  if (cart.length === 0) {
    message = <p>Please add some products!</p>;
  } else {
    message = (
      <div>
        <h3>Boroloxxx</h3>
        <p>
          <small>Thanks for shopping with us!</small>
        </p>
      </div>
    );
  }
  return (
    <div>
      <h3 className={cart.length === 0 ? "red" : "blue"}>
        Order Summary: {cart.length}
      </h3>
      <p className={`bolder ${cart.length === 3 ? "yellow" : "purple"}`}>
        Something
      </p>

      {cart.length > 2 ? (
        <span className="yellow">Aro kino</span>
      ) : (
        <span>Fokira</span>
      )}

      {message}

      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}

      {cart.length === 2 && <p>Haha kino kino</p>}

      {cart.length === 3 || <h4>3ta kina jabe na</h4>}
    </div>
  );
};

export default Cart;

/**
 * Conditional rendering
 *
 * 1. use if or if else to set a variable that will contain an element
 *
 * 2. ternary operator: condition ? 'for true' : 'false'
 *
 * 3. Logical &&(and) : (if the condition is true then the next thing will be displayed)
 *
 * 4. Logical ||(or): (if the condition is false then the next thing will be displayed)
 *
 */

/**
 * conditional css
 *
 * 1. use ternary
 *
 * 2. ternary inside template string
 *
 */
