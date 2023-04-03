import React, { useEffect, useState } from "react";
import { api } from "../services/Api";
import Coin from "./shared/coin";
import "../styles/css/coins.css";
import background from "../images/currency.jpg";
import loader from "../images/loading.gif";
const Landing = () => {
  const [search, setSarch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const coins = await api();
      setData(coins.data);
    };
    fetchApi();
  }, []);
  //search function
  const searchHandler = (event) => {
    setSarch(event.target.value);
  };
  //filter coins with search box value
  const filterCoins = data.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="containerC">
      <img id="back" src={background} alt="background image" />
      <div className="container2">
        <div className="topContainer">
          <h2>Digital currency exchange</h2>
          <input
            type="search"
            value={search}
            onChange={searchHandler}
            placeholder="search what you want !"
          />
        </div>
        <div className="bottomContainer">
          <div className="spanContainer">
            <div className="left">
              <span>logo</span>
              <span>symbol</span>
            </div>
            <div className="right">
              <span>name</span>
              <span>current-price</span>
              <span>market-cap</span>
              <span>peice-change-24h</span>
            </div>
          </div>
          {data.length ? (
            filterCoins.map((coin) => (
              <Coin
                key={coin.id}
                name={coin.name}
                symbol={coin.symbol}
                img={coin.image}
                price={coin.current_price}
                marketCap={coin.market_cap}
                priceChange={coin.price_change_percentage_24h}
              />
            ))
          ) : (
            <img src={loader} alt="loader" id="loader" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
