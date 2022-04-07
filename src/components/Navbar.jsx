import React from "react";

function Navbar() {
  const currency = [
    "AUD",
    "CAD",
    "CHF",
    "CNY",
    "DKK",
    "EUR",
    "GBP",
    "HKD",
    "IDR",
    "INR",
    "JPY",
    "KRW",
    "MNT",
    "MYR",
    "NOK",
    "PHP",
    "SDR",
    "SEK",
    "SGD",
    "THB",
    "TWD",
    "USD",
  ];

  const arrow = (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 386.257 386.257"
      fill="white"
      height="10"
      width="10"
    >
      <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />
    </svg>
  );

  return (
    <div className="flex justify-end">
      <nav className="flex justify-between p-4">
        <div className="relative">
          <div className="absolute right-1 top-0 border-l px-3 py-2 md:py-3 h-full -z-10">
            {arrow}
          </div>
          <select
            name=""
            id=""
            className="appearance-none bg-transparent border-[0.25px] border-white text-white rounded-sm px-2 py-1 mr-2 w-24 md:w-32 text-ellipsis overflow-hidden text-xs md:text-base cursor-pointer outline-none"
          >
            <option value="Mainnet" className="text-blue-300">
              Mainnet
            </option>
            <option value="Testnet" className="text-blue-300">
              Testnet
            </option>
            <option value="Localterra" className="text-blue-300">
              Localterra
            </option>
          </select>
        </div>
        <div className="relative">
          <div className="absolute right-1 top-0 border-l px-2 py-2 md:py-3 h-full -z-10">
            {arrow}
          </div>
          <select
            name=""
            id=""
            className="appearance-none bg-transparent border-[0.25px] border-white text-white rounded-sm px-2 py-1 ml-2 w-20 md:w-28 text-ellipsis overflow-hidden text-xs md:text-base cursor-pointer outline-none"
          >
            {currency.map((cur) => (
              <option value={cur} key={cur} className="text-blue-300">
                {cur}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
