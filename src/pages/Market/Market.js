import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/styles.css";

const Asset = ({
  index,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  isHeader,
  handleSort,
  sortOrder,
  sortBy,
  canBuy,
  onBuyClick,
}) => {
  const isAscending = sortOrder === "asc";

  const handleBuyClick = () => {
    if (canBuy) {
      onBuyClick(name); // Simulate a buy action with the coin's name
    }
  };

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
          <p className="asset-symbol">{symbol}</p>
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
            className={`asset-percent${
              isHeader ? " asset-header-bold" : priceChange < 0 ? " red" : " green"
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
          <p
            className={`asset-marketcap${
              isHeader ? " asset-header-bold" : ""
            }`}
          >
            {isHeader ? (
              <button onClick={() => handleSort("market_cap")} className="sort-button">
                Market Cap{" "}
                {showArrow("market_cap") && (isAscending ? "▲" : "▼")}
              </button>
            ) : (
              `$${marketcap.toLocaleString()}`
            )}
          </p>
          <div className={`asset-buy${isHeader ? " asset-header-bold" : ""}`}>
            <p className={`asset-buy-header${isHeader ? " asset-header-bold" : ""}`}>
              {isHeader ? "Buy" : canBuy ? <button className="buy-button green" onClick={handleBuyClick}>Buy</button> : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [assets, setAssets] = useState([]);
  const [exampleText, setExampleText] = useState("Bitcoin");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc"); // Default sorting order is descending
  const [sortBy, setSortBy] = useState(""); // Default sorting column is empty

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

  const cryptoCurrencies = [
    "Bitcoin",
    "Ethereum",
    "Tether",
    "BNB",
    "XRP",
    "USD Coin",
    "Lido Staked Ether",
    "Cardano",
    "Dogecoin",
    "Solana",
  ];

  const getRandomCrypto = () => {
    const randomIndex = Math.floor(Math.random() * cryptoCurrencies.length);
    return cryptoCurrencies[randomIndex];
  };

  useEffect(() => {
    setExampleText(getRandomCrypto());
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
      } else if (column === "priceChange") {
        const priceChangeA = a.price_change_percentage_24h;
        const priceChangeB = b.price_change_percentage_24h;
        return newSortOrder === "asc"
          ? priceChangeA - priceChangeB
          : priceChangeB - priceChangeA;
      } else if (column === "total_volume") {
        const volumeA = a.total_volume;
        const volumeB = b.total_volume;
        return newSortOrder === "asc" ? volumeA - volumeB : volumeB - volumeA;
      } else if (column === "market_cap") {
        const marketCapA = a.market_cap;
        const marketCapB = b.market_cap;
        return newSortOrder === "asc" ? marketCapA - marketCapB : marketCapB - marketCapA;
      } else if (column === "name") {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return newSortOrder === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
      }
      return 0;
    });

    setAssets(sortedAssets);
  };

  const filteredAssets = assets.filter((asset) =>
    asset.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle the buy action here
  const handleBuyClick = (coinName) => {
    // Replace this with your buy logic
    alert(`Buying ${coinName}`);
  };

  return (
    <div className="asset-app">
      <div className="asset-search">
        <h1 className="asset-text">Explore Assets:</h1>
        <form>
          <input
            className="asset-input"
            type="text"
            onChange={handleChange}
            placeholder={`Example: ${exampleText}`}
          />
        </form>
      </div>
      <hr className="separator" />
      <div className="asset-top-header">
        <h1>Top Cryptocurrency Price by Market Cap</h1>
        <p>Satoshi Nakamoto published the Bitcoin Whitepaper on 31 Oct 2008. The first block was mined shortly after on 3 Jan 2009.</p>
      </div>
      {/* Header row with sorting button */}
      <div className="asset-header">
        <Asset
          isHeader
          index="#"
          name="Coin"
          price="Price"
          handleSort={handleSort}
          priceChange="24h"
          volume="Volume"
          marketcap="Market Cap"
          sortOrder={sortOrder}
          sortBy={sortBy}
          canBuy={false}
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
            marketcap={asset.market_cap}
            image={asset.image}
            priceChange={asset.price_change_percentage_24h}
            handleSort={handleSort}
            sortOrder={sortOrder}
            sortBy={sortBy}
            canBuy={true} // Set canBuy to true for the coins that can be bought
            onBuyClick={(coinName) => handleBuyClick(coinName)} // Pass the buy action handler
          />
        );
      })}
    </div>
  );
}

export default App;
