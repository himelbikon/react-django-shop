import React from "react";
import CarouselSlider from "../components/CarouselSlider";
import LatestProducts from "../components/LatestProducts";

const HomeScreen = () => {
  return (
    <div>
      <CarouselSlider />
      <section className="my-5">
        <LatestProducts />
      </section>
    </div>
  );
};

export default HomeScreen;
