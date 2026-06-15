import React, { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";
import AboutUs from "./AboutUs";

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowAboutUs(false);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowAboutUs(false);
  };

  const handleAboutUsClick = () => {
    setShowAboutUs(true);
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      <div
        className={`landing-page ${
          showProductList || showAboutUs ? "fade-out" : ""
        }`}
      >
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Get green with our selection of healthy plants!</p>

            <button
              className="get-started-button"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div
        className={`product-list-container ${showProductList ? "visible" : ""}`}
      >
        <ProductList
          onHomeClick={handleHomeClick}
          onAboutUsClick={handleAboutUsClick}
        />
      </div>
      <div className={`aboutus-container ${showAboutUs ? "visible" : ""}`}>
        <div className="aboutus-header">
          <button className="close-aboutus-btn" onClick={handleGetStartedClick}>
            ← Start Shopping
          </button>
          <h1>About Us</h1>
        </div>
        <div className="aboutus-content">
          <AboutUs />
        </div>
      </div>
    </div>
  );
}

export default App;
