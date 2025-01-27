import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/styles.css";
import History from "./history.json"
import cards from "../../images/card_img.png";

const Asset = ({
  index,
  name,
  price,
  symbol, // Added symbol prop
  volume,
  image,
  priceChange,
  isHeader,
  handleSort,
  sortOrder,
  sortBy,
  currentTime, // Added currentTime prop
}) => {
  const isAscending = sortOrder === "asc";

  const showArrow = (column) => {
    return sortBy === column && (sortOrder === "asc" || sortOrder === "desc");
  };

  return (
    <div className={`asset-container${isHeader ? " asset-header" : ""}`}>
      <div className="asset-row">
        <div className={`asset${isHeader ? " asset-header-bold" : ""}`}>
          <p className={`asset-index${isHeader ? " asset-header-bold" : ""}`}>
            {isHeader ? "#" : index}
          </p>
          {isHeader ? (
            <p className="asset-name">
              <button onClick={() => handleSort("name")} className="sort-button">
                Coin{" "}
                {showArrow("name") && (isAscending ? "▲" : "▼")}
              </button>
            </p>
          ) : (
            <img src={image} alt="crypto" />
          )}
          <h2 className="asset-name">{isHeader ? "" : name}</h2>
          <p className={`asset-symbol${isHeader ? " asset-header-bold" : ""}`}>
            {isHeader ? "Symbol" : symbol}
          </p>
        </div>
        <div className="asset-data">
          <p className={`asset-price${isHeader ? " asset-header-bold" : ""}`}>
            {isHeader ? (
              <button onClick={() => handleSort("current_price")} className="sort-button">
                Price{" "}
                {showArrow("current_price") && (isAscending ? "▲" : "▼")}
              </button>
            ) : (
              `$${price}`
            )}
          </p>
          <p
            className={`asset-percent${isHeader ? " asset-header-bold" : priceChange < 0 ? " red" : " green"
              }`}
          >
            {isHeader ? (
              <button onClick={() => handleSort("priceChange")} className="sort-button">
                24h{" "}
                {showArrow("priceChange") && (isAscending ? "▲" : "▼")}
              </button>
            ) : (
              `${priceChange.toFixed(2)}%`
            )}
          </p>
          <p className={`asset-volume${isHeader ? " asset-header-bold" : ""}`}>
            {isHeader ? (
              <button onClick={() => handleSort("total_volume")} className="sort-button">
                Volume{" "}
                {showArrow("total_volume") && (isAscending ? "▲" : "▼")}
              </button>
            ) : (
              `$${volume.toLocaleString()}`
            )}
          </p>
          <p className={`asset-time${isHeader ? " asset-header-bold" : ""}`}>
            {isHeader ? (
              <button onClick={() => handleSort("time")} className="sort-button">
                Time{" "}
                {showArrow("time") && (isAscending ? "▲" : "▼")}
              </button>
            ) : (
              currentTime.toLocaleString()
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [assets, setAssets] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date()); // Initialize with the current date and time

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false"
      )
      .then((res) => {
        setAssets(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // Update the current time at regular intervals
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (column) => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    setSortBy(column);

    const sortedAssets = [...assets];
    sortedAssets.sort((a, b) => {
      if (column === "current_price") {
        const priceA = a.current_price;
        const priceB = b.current_price;
        return newSortOrder === "asc" ? priceA - priceB : priceB - priceA;
      }
      else if (column === "priceChange") {
        const priceChangeA = a.price_change_percentage_24h;
        const priceChangeB = b.price_change_percentage_24h;
        return newSortOrder === "asc"
          ? priceChangeA - priceChangeB
          : priceChangeB - priceChangeA;
      } else if (column === "total_volume") {
        const volumeA = a.total_volume;
        const volumeB = b.total_volume;
        return newSortOrder === "asc" ? volumeA - volumeB : volumeB - volumeA;
      } else if (column === "name") {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return newSortOrder === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
      } else if (column === "time") {
        // Sort by date and time
        return newSortOrder === "asc" ? a.date - b.date : b.date - a.date;
      }
      return 0;
    });

    setAssets(sortedAssets);
  };

  const filteredAssets = assets.filter((asset) =>
    asset.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="asset-app">
      <div className="asset-search">
        <h1 className="asset-text">Search History:</h1>
        <form>
          <input
            className="asset-input"
            type="text"
            onChange={handleChange}
            placeholder="Enter a cryptocurrency name"
          />
        </form>
      </div>
      <div className="asset-header">
        <Asset
          isHeader
          index="#"
          name="Coin"
          price="Price"
          handleSort={handleSort}
          priceChange="24h"
          volume="Volume"
          currentTime="Time" // Added currentTime prop
          sortOrder={sortOrder}
          sortBy={sortBy}
        />
      </div>
      {filteredAssets.map((asset, index) => {
        return (
          <Asset
            key={asset.id}
            index={index + 1}
            name={asset.name}
            price={asset.current_price}
            symbol={asset.symbol}
            volume={asset.total_volume}
            image={asset.image}
            priceChange={asset.price_change_percentage_24h}
            handleSort={handleSort}
            sortOrder={sortOrder}
            sortBy={sortBy}
            currentTime={new Date()} // Pass the current date and time to the Asset component
          />
        );
      })}
    </div>
  );
}

export default App;
