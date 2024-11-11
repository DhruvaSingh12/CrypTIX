"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Box from "@/components/Box"; 
import Toggle from "./components/Toggle"; 
import Loading from "./loading"; 
import { Coin } from "@/types";

const Dashboard: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>(""); 
  const [paginatedCoins, setPaginatedCoins] = useState<Coin[]>([]); 

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Coin[]>(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&x_cg_demo_api_key=CG-tyrZY6nMqRfVrSHtSrQZRTti"
      );
      console.log("RESPONSE>>>", response.data);
      setCoins(response.data);
      setPaginatedCoins(response.data.slice(0, 100));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("ERROR>>>", error.message);
      } else {
        console.log("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  if (loading) {
    return <Loading/>;
  }

  return (
    <div className="bg-white rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <div className="flex flex-col gap-y-2 bg-white h-full">
        <Box className="mt-2">
          <Header />
        </Box>
        <Box className="overflow-y-auto flex-1 h-full">
          <div className="mb-4">
            <Toggle
              coins={search ? filteredCoins : paginatedCoins}
              setSearch={setSearch}
              search={search}
              handleChange={handleChange}
            />
          </div>
        </Box>
      </div>
      <div className="hidden">
          <script src="https://cdn.botpress.cloud/webchat/v2.1/inject.js" defer></script>
          <script src="https://mediafiles.botpress.cloud/14901d04-91d2-44fd-ab82-b83e982a324f/webchat/v2.1/config.js" defer></script>
        </div>
    </div>
  );
};

export default Dashboard;