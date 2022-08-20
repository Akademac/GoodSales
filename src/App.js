import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Module from "./components/module/Module";
import Products from "./components/Products";
import Footer from "./components/Footer";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App" basename='/GoodSales'>
      <Router>
        <Module />
        <Header />
        <Routes>
          <Route path="/GoodSales" element={<Home />} />
          <Route path="/GoodSales/products" element={<Products />} />
          <Route path='/GoodSales/product/:id' element={<SingleProduct />} />
          <Route path='/GoodSales/cart' element={<Cart />} />
          <Route path='/GoodSales/about' element={<About />} />
          <Route path='/GoodSales/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
