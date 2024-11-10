import React from "react";
import { twMerge } from "tailwind-merge";
import SearchIcon from "@mui/icons-material/Search";

interface SearchProps {
  search: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; 
}

const Search: React.FC<SearchProps> = ({ search, handleChange, className }) => {
  return (
    <div className="flex items-center gap-4 w-4/5 mx-auto px-2 pb-2 rounded-full mb-6">
      <SearchIcon className="text-black text-5xl" />
      <input
        className={twMerge(`
          bg-gray-200
          text-black
          font-inter
          text-base
          border-none
          w-full
          focus:outline-none
          placeholder:text-neutral-800
          disabled:cursor-not-allowed
          disabled:opacity-50
          rounded-full
          px-3
          py-3
        `, className)}
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
