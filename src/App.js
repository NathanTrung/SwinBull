// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import NavBar from './navbar';
import Home from './pages/Home/Home'; // Create a Home component
import Market from './pages/Market/Market'; // Create a Market component

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} /> {/* Use element prop */}
          <Route path="/market" element={<Market />} /> {/* Use element prop */}
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
