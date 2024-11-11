import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Grid from "./Grid";
import Button from "@/components/Button";
import CryptoTable from "./Table";
import Search from "./Search"; 
import {FaTable, FaTh} from "react-icons/fa";

interface ToggleProps {
  coins: any[];
  search: string; 
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Toggle: React.FC<ToggleProps> = ({ coins, search, handleChange, setSearch }) => {
  const [view, setView] = useState<"grid" | "table">("table");

  const handleViewToggle = () => {
    setView((prevView) => (prevView === "grid" ? "table" : "grid"));
  };

  return (
    <div className="w-full text-black bg-white rounded-lg h-full overflow-hidden overflow-y-auto">
      <div className="flex justify-between w-full items-center overflow-hidden px-4">
        <div className="flex-grow">
          <Search search={search} handleChange={handleChange} />
        </div>

        <Tooltip title={`Switch to ${view === "grid" ? "Table" : "Grid"} View`}>
          <IconButton
            onClick={handleViewToggle}
            className="hover:bg-gray-300 bg-gray-200 p-3 mb-6 hover:cursor-pointer">
            {view === "grid" ? (
              <FaTable className="text-black text-[32px]" />
            ) : (
              <FaTh className="text-black text-[32px]" />
            )}
          </IconButton>
        </Tooltip>
      </div>

      <div className="overflow-y-auto">
        {view === "grid" ? (
          <div className="flex justify-center items-stretch flex-wrap w-full gap-4">
            {coins.length > 0 ? (
              coins.map((coin, i) => <Grid coin={coin} key={i} />)
            ) : (
              <div className="text-center">
                <h1>Try searching some other cryptocurrency.</h1>
                <div className="flex justify-center mt-8">
                  <Button text="Clear Search" onClick={() => setSearch("")} />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            {coins.length > 0 ? (
              <CryptoTable coins={coins} />
            ) : (
              <div className="text-center">
                <h1>Try searching some other cryptocurrency.</h1>
                <div className="flex justify-center mt-8">
                  <Button text="Clear Search" onClick={() => setSearch("")} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Toggle;