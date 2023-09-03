import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/styles.css";
import cards from "../../images/card_img.png";

const Asset = ({
  index,
  name,
  price,
  symbol, // Added symbol prop
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
      onBuyClick(name, symbol); // Pass symbol as well
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
          <p className={`asset-symbol${isHeader ? " asset-header-bold" : ""}`}>
            {isHeader ? "" : symbol}
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

const BuyModal = ({ isOpen, onClose, coinName, coinSymbol }) => {
  const [step, setStep] = useState(1);

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Enter Amount and Wallet Address</h2>
            <form className="checkOutForm" onSubmit={handleNextStep}>
              <div className="col">
                <div className="inputBox">
                  <span>Amount:</span>
                  
                  <input
                    type="text"
                    placeholder="Enter Amount"
                    name="amount"
                    required
                  />
                  <span>.{coinSymbol}</span>
                </div>
                <div className="inputBox">
                  <span>Wallet Address:</span>
                  <input
                    type="text"
                    placeholder="Enter Wallet Address"
                    name="wallet"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="red-next-btn">Next</button>
            </form>
          </div>
        );
      case 2:
        return (
          <div>
            <form className="checkOutForm" onSubmit={handleNextStep}>
              <div className="row">
                <div className="col">
                  <h3 className="title">Billing Address</h3>
                  <div className="inputBox">
                    <span>Full name:</span>
                    <input type="text" placeholder="eg: John Doe" name="fullName" />
                  </div>
                  <div className="inputBox">
                    <span>Email:</span>
                    <input type="email" placeholder="example@example.com" />
                  </div>
                  <div className="inputBox">
                    <span>Address:</span>
                    <input type="text" placeholder="20 John St" />
                  </div>
                  <div className="inputBox">
                    <span>City:</span>
                    <input type="text" placeholder="Melbourne" />
                  </div>
                  <div className="flex">
                    <div className="inputBox">
                      <span>State:</span>
                      <input type="text" placeholder="VIC" />
                    </div>
                    <div className="inputBox">
                      <span>Zip Code:</span>
                      <input type="text" placeholder="3122" />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <h3 className="title">Payment</h3>
                  <div className="inputBox">
                    <span>Cards Accepted:</span>
                    <img src={cards} alt="cards" />
                  </div>
                  <div className="inputBox">
                    <span>Name on Card:</span>
                    <input type="text" placeholder="Mr. John Doe" />
                  </div>
                  <div className="inputBox">
                    <span>Credit Card Number:</span>
                    <input type="text" placeholder="1111-2222-3333-4444" />
                  </div>
                  <div className="flex">
                    <div className="inputBox">
                      <span>EXP:</span>
                      <input type="text" placeholder="2026" />
                    </div>
                    <div className="inputBox">
                      <span>CVV:</span>
                      <input type="text" placeholder="123" />
                    </div>
                  </div>
                  <div className="inputBox">
                    <span>Total:</span>
                    <hr />
                  </div>
                </div>
              </div>
              <button type="submit" className="red-next-btn">Next</button>
              <button type="button" onClick={handlePrevStep} className="red-back-btn">
                Previous
              </button>
            </form>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Payment Summary</h2>
            <div className="payment-summary">
              <p>Amount: {formData.amount}</p>
              <p>Wallet Address: {formData.wallet}</p>
              <p>Full name: {formData.fullName}</p>
              <p>Email: {formData.email}</p>
              <p>Address: {formData.address}</p>
              <p>City: {formData.city}</p>
              <p>State: {formData.state}</p>
              <p>Zip Code: {formData.zipCode}</p>
              <p>Payment {Math.random() < 0.5 ? "Successful" : "Failed"}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const [formData, setFormData] = useState({
    amount: "",
    wallet: "",
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal">
        {renderStep()}
        {step <= 3 && (
          <button className="close-button" onClick={onClose}></button>
        )}
      </div>
    </div>
  ) : null;
};

function App() {
  const [assets, setAssets] = useState([]);
  const [exampleText, setExampleText] = useState("Bitcoin");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState("");
  const [selectedSymbol, setSelectedSymbol] = useState("");

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

  const handleBuyClick = (coinName, coinSymbol) => {
    setIsModalOpen(true);
    setSelectedCoin(coinName);
    setSelectedSymbol(coinSymbol);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        <p>
          Satoshi Nakamoto published the Bitcoin Whitepaper on 31 Oct 2008. The
          first block was mined shortly after on 3 Jan 2009.
        </p>
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
            canBuy={true}
            onBuyClick={(coinName, coinSymbol) =>
              handleBuyClick(coinName, coinSymbol)
            }
          />
        );
      })}
      <BuyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        coinName={selectedCoin}
        coinSymbol={selectedSymbol}
      />
    </div>
  );
}

export default App;
