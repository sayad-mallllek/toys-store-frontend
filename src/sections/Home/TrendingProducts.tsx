import React from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  className?: string;
}

const TrendingProducts = ({ className }: Props) => {
  return (
    <section className={twMerge("flex flex-col gap-4", className)}>
      <p className="font-bold text-primary">Trending Products</p>
      <p className="font-nunito font-bold text-4xl">Hot Offers</p>
      <p className="text-gray-500 text-lg">
        Simple, transparent pricing that grows with you. Try any plan free for
        30 days.
      </p>
    </section>
  );
};

export default TrendingProducts;
