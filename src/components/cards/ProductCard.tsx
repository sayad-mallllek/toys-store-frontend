import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

const ProductCard = ({ className }: Props) => {
  return (
    <div
      className={twMerge(
        "h-[313px] w-[242px] border border-[#C7C7C7] rounded-lg flex flex-col items-center grow transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary hover:border cursor-pointer hover:scale-105 hover:z-10",
        className
      )}
    >
      <Image
        src={"/images/product-card-image.png"}
        alt="product-card-image.png"
        height={221}
        width={221}
      />
      <div className="bg-[#FAF6F9] border-t border-[#C7C7C7] overflow-hidden flex flex-col justify-evenly items-center w-full p-4">
        <p className="font-bold text-primary text-xl">$25</p>
        <p className="font-medium text-sm text-pretty">
          Running Man' Pirate Barrel Games
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
