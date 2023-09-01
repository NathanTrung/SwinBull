import Home from './pages/Home/Home.js';
import AboutUs from './pages/AboutUs/AboutUs.js';
import Market from './pages/Market/Market.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home  />}/>
        <Route path="/about" element={<AboutUs  />}/>
        <Route path="/market" element={<Market  />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
