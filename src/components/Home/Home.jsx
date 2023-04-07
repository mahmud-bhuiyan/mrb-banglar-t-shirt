import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const tshirts = useLoaderData();
  return (
    <div>
      <h3>Home</h3>
      <h5>Tshirts: {tshirts.length}</h5>
    </div>
  );
};

export default Home;
