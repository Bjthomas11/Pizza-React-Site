import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import FeaturedProduct from "./components/featuredProduct/FeaturedProduct";
import Footer from "./components/footer/Footer";
import MobileNav from "./components/mobile-sidebar/MobileNav";
import { productData, productDataTwo } from "./components/products/productData";

import "./App.scss";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Nav toggle={toggle} />
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Products title="Pick your favorite pizza" data={productData} />
      <FeaturedProduct />
      <Products title="Sweet Treats for You" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
