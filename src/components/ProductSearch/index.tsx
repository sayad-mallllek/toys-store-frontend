import { twMerge } from "tailwind-merge";
import SearchIcon from "../icons/SearchIcon";

interface Props {
  className?: string;
}

const ProductSearch = ({ className }: Props) => {
  return (
    <div
      className={twMerge(
        "rounded-full bg-primary py-2 px-2 sm:px-4 flex gap-4 items-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] transition-all duration-300",
        className
      )}
    >
      <div className="rounded-full p-2 w-fit bg-[#FBE628]">
        <SearchIcon className="w-6 h-6" />
      </div>
      <p className="text-white hidden smx:block sm:text-lg">
        Find your product
      </p>
      <input
        className="bg-white text-black placeholder-grey-300 rounded-full py-2 px-4 text-sm outline-none transition-shadow duration-200 focus:shadow-md shadow-gray-300 flex-1"
        type="text"
        placeholder="Search for your product"
      />
    </div>
  );
};

export default ProductSearch;
