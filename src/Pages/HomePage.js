import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Product from "../components/Product";
import "../components/hero.css";

const HomePage = () => {
  return (
    <div className="hero">
      <div className="container mx-auto min-h-100">
        {<Header />}
        {<Hero />}
        {<Product />}
      </div>
    </div>
  );
};

export default HomePage;
