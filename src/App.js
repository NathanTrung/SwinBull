// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import NavBar from './navbar';
import Footer from './footer';
import Market from './pages/Market/Market'; // Create a Market component
import Transaction from './pages/Transaction/Transaction'; // Create a Transaction component
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Market />} /> {/* Use element prop */}
          <Route path="/market" element={<Market />} /> {/* Use element prop */}
          <Route path="/transaction" element={<Transaction />} /> {/* Use element prop */}
          {/* Add more routes for other pages */}
        </Routes>
        
        <Footer /> {/* Add the Footer component here */}
      </div>
    </Router>
  );
}

export default App;
