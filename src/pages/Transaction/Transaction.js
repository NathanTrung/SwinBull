import React, { useState, useEffect } from "react";
import transactionHistoryData from "./history.json"; // Import your JSON file

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Crypto Currency</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.cryptoCurrency.name}</td>
              <td>{transaction.amount}</td>
              <td>${transaction.cryptoCurrency.current_price}</td>
              <td>${(transaction.amount * transaction.cryptoCurrency.current_price).toFixed(2)}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    // You don't need to fetch data since it's already imported
    setCryptoData(transactionHistoryData);
  }, []);

  // Generate mock transactions based on the loaded crypto data
  const transactions = cryptoData
    ? cryptoData.cryptoCurrencies.map((cryptoCurrency) => ({
        cryptoCurrency,
        amount: Math.floor(Math.random() * 10), // Random amount for demonstration
        date: "2023-09-01", // Replace with actual date
      }))
    : [];

  return (
    <div className="App">
      <h1>Crypto Transaction App</h1>
      {cryptoData ? (
        <TransactionHistory transactions={transactions} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default App;
