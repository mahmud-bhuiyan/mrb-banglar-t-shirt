import React from "react";
import Cousin from "../Cousin/Cousin";

const Aunty = ({ ring }) => {
  return (
    <div>
      <h3>Aunty</h3>
      <section className="flex">
        <Cousin>Jane Doe</Cousin>
        <Cousin hasFriend={true} ring={ring}>
          John Doe
        </Cousin>
      </section>
    </div>
  );
};

export default Aunty;
