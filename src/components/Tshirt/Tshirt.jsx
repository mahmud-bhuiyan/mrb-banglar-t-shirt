import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tshirt, handleAddToCart }) => {
  const { name, price, picture } = tshirt;

  return (
    <div className="tshirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={() => handleAddToCart(tshirt)}>But Now</button>
    </div>
  );
};

export default Tshirt;
