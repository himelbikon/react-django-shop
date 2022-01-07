import React, { useEffect } from "react";
import CarouselSlider from "../components/CarouselSlider";
import Categories from "../components/Categories";
import Feature from "../components/Feature";
import LatestProducts from "../components/LatestProducts";
import PopularProducts from "../components/PopularProducts";
import Showcase from "../components/Showcase";
import Subscribe from "../components/Subscribe";
import { sitename } from "../global_data";

const HomeScreen = () => {
  useEffect(() => {
    document.title = "Home" + sitename;
  }, []);
  return (
    <div>
      <CarouselSlider />
      <section className="my-5">
        <LatestProducts />
      </section>

      <section>
        <Categories />
      </section>

      <section className="my-5">
        <PopularProducts />
      </section>

      <section>
        <Showcase />
      </section>

      <section>
        <Feature />
      </section>

      <section>
        <Subscribe />
      </section>
    </div>
  );
};

export default HomeScreen;
