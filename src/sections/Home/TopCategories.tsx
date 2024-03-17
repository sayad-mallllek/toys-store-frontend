import Carousel from "@/components/Carousel";
import ProductSearch from "@/components/ProductSearch";
import React from "react";

const TopCategories = () => {
  return (
    <section className="p-4 flex flex-col gap-2 mt-6 sm:mt-12 items-center">
      <ProductSearch className="w-fit mx-auto mb-10" />
      <p className="text-xs text-primary font-bold">Top Picks</p>
      <p className="text-2xl font-bold font-nunito">Shop By Category</p>
      <p className="text-sm text-gray-500 text-center max-w-[80ch] mb-4">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>
      <Carousel />
    </section>
  );
};

export default TopCategories;
