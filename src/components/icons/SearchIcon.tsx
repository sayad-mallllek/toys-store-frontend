import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M36.75 36.75L30.6252 30.625M35 20.125C35 28.3402 28.3402 35 20.125 35C11.9098 35 5.25 28.3402 5.25 20.125C5.25 11.9098 11.9098 5.25 20.125 5.25C28.3402 5.25 35 11.9098 35 20.125Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
