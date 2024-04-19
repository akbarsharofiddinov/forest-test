import React from "react";
import { Categories } from "../../components";

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <Categories />
        </div>
      </div>
    </>
  );
};

export default Home;
