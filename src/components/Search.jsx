import React, { useState } from "react";
import Coins from "./Coins";

const Search = ({ coins }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="rounded-div my-4 ">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2 ">Search CryptoCurrency</h1>
        <form action="">
          <input 
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
          />
        </form>
      </div>
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24hr</th>
            <th className='hidden md:table-cell'> 24hr Volume</th>
            <th className='hidden sm:table-cell'>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => {
              return <Coins key={coin.id} coin={coin} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
