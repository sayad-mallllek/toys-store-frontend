"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./CarouselArrowButton";
import { DotButton, useDotButton } from "./CarouselDotButtons";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

const categories = [
  {
    bgUrl: "/green-stain.svg",
    color: "#46D913",
    icon: "/toy-car.svg",
    name: "Dorongan",
  },
  {
    bgUrl: "/green-stain.svg",
    color: "#46D913",
    icon: "/toy-car.svg",
    name: "Dorongan",
  },
  {
    bgUrl: "/green-stain.svg",
    color: "#46D913",
    icon: "/toy-car.svg",
    name: "Dorongan",
  },
  {
    bgUrl: "/green-stain.svg",
    color: "#46D913",
    icon: "/toy-car.svg",
    name: "Dorongan",
  },
];

const Carousel = ({ className }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {categories.map((category, index) => (
          <div key={index} className="embla__slide">
            <div className="flex flex-col gap-4 items-center">
              <div
                className={`flex justify-center items-center h-[154px] w-[174px] bg-center bg-contain bg-no-repeat`}
                style={{ backgroundImage: `url(${category.bgUrl})` }}
              >
                <Image
                  src={category.icon}
                  alt={category.icon}
                  height={88}
                  width={88}
                />
              </div>
              <div
                className={twMerge("rounded-3xl p-2 w-fit")}
                style={{ backgroundColor: category.color }}
              >
                <p className="text-white text-sm">{category.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex flex-col gap-4 mt-8">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
