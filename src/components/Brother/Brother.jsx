import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Brother = () => {
  const newRing = useContext(RingContext);
  return (
    <div>
      <h4>Brother</h4>
      <p>Haha: {newRing}</p>
    </div>
  );
};

export default Brother;
