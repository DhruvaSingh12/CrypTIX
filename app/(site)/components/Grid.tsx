import React, { useState } from "react";
import { removeItemsFromWatchlist } from "@/actions/removeItemsFromWatchlist";
import { saveItemsToWatchlist } from "@/actions/saveItemsToWatchlist";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { Coin } from "@/types";

interface GridProps {
  coin: Coin;
}

const Grid: React.FC<GridProps> = ({ coin }) => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));

  return (
    <a href={`/coin/${coin.id}`}>
      <div
        className={`flex flex-col gap-y-2 w-[275px] p-4 rounded-lg hover:bg-neutral-600/35 cursor-pointer ${
          coin.price_change_percentage_24h < 0 ? "bg-red-200" : "bg-green-200"
        }`}
      >
        <div className="flex justify-start items-center gap-y-2 gap-x-4">
          <img
            src={coin.image}
            className="h-[50px] w-[50px] rounded-full"
            alt={coin.name}
          />
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col gap-[2px]">
              <p className="text-[18px] font-semibold text-black">
                {coin.name
                  ? coin.name.length >= 17
                    ? `${coin.name.slice(0, 17)}..`
                    : coin.name
                  : ""}
              </p>
              <p className="uppercase text-gray-600 text-[15px] font-bold">
                {coin.symbol}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <p
            className={`font-semibold w-1/2 text-[20px] ${
              coin.price_change_percentage_24h >= 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            ${coin.current_price.toLocaleString()}
          </p>
          <div
            className={`border-2 w-3/8 rounded-md px-2 py-1 font-semibold text-[18px] ${
              coin.price_change_percentage_24h >= 0
                ? "border-green-500 text-green-500"
                : "border-red-500 text-red-500"
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <button
            className={`w-1/8 p-1 rounded-full flex items-center justify-center ${
              coin.price_change_percentage_24h < 0
                ? "text-red-500"
                : "text-green-500"
            }`}
            onClick={(e) => {
              e.preventDefault();
              if (isCoinAdded) {
                removeItemsFromWatchlist(e, coin.id, setIsCoinAdded);
              } else {
                setIsCoinAdded(true);
                saveItemsToWatchlist(e, coin.id);
              }
            }}
          >
            {isCoinAdded ? (
              <FaCheckCircle size={28} />
            ) : (
              <FaPlusCircle size={28} />
            )}
          </button>
        </div>

        <div className="flex flex-row gap-x-2">
          <p className="text-gray-600 font-bold">Tot. Vol.</p>
          <p className="text-black font-semibold text-[16.5px]">
            {coin.total_volume.toLocaleString()}
          </p>
        </div>
        <div className="flex flex-row gap-x-2">
          <p className="text-gray-600 font-bold">Market Cap.</p>
          <p className="text-black font-semibold text-[15.5px]">
            ${coin.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Grid;