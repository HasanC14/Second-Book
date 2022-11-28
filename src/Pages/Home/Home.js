import React from "react";
import Advertisement from "../Advertisement/Advertisemet";
import Blog from "../Blog/Blog";
import Categories from "../Categories/Categories";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";
import Stats from "../Stats/Stats";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Categories></Categories>
      <Blog></Blog>
      <Advertisement></Advertisement>
      <Stats></Stats>
      <Faq></Faq>
    </div>
  );
};

export default Home;
