import React from "react";
import logo from "../resources/terra_logo.svg";

function Search() {
  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="white"
    >
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col justify-center items-center">
      <div className="text-center pb-10 -mt-10 md:-mt-12">
        <img src={logo} alt="" className="w-48 h-6 md:w-64 md:h-9" />
      </div>
      <form action="" className="mt-8 md:mt-10 w-full px-4 py-2 md:max-w-2xl">
        <div className="relative">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search Block/ Tx/ Account"
            className="w-full pb-1 px-1 text-base md:text-xl appearance-none bg-transparent border-b border-[hsla(0,0%,100%,.9)] text-white placeholder:text-[hsla(0,0%,100%,.35)] placeholder:px-1 outline-none"
          />
          <button className="absolute right-0">{searchIcon}</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
