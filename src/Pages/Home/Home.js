import React from "react";
import Advertisement from "../Advertisement/Advertisemet";
import Categories from "../Categories/Categories";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Categories></Categories>
      <Advertisement></Advertisement>
      <Faq></Faq>
    </div>
  );
};

export default Home;
