import React from "react";
import Search from "../components/Search";
import Trending from "../components/Trending";

const Home = ({ coins }) => {
  return (
    <>
      <Search coins={coins} />
      <Trending />
    </>
  );
};

export default Home;
