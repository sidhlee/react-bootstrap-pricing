import React from "react";
import "./styles.css";

import Navbar from "./Navbar";
import PricingHeader from "./PricingHeader";
import Plans from "./Plans";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App" id="top">
      <Navbar />
      <PricingHeader />
      <div className="container">
        <Plans />
        <Footer />
      </div>
    </div>
  );
}
