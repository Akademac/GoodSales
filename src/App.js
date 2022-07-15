import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Module from "./components/module/Module";
import MiniNav from './components/MiniNav';
import Products from "./components/Products";
function App() {
  return (
    <div className="App" basename='/GoodSales'>
      <Router>
        <Module />
        <MiniNav />
        <Header />
        <Routes>
          <Route path="/GoodSales" element={<Home />} />
          <Route path="/GoodSales/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
