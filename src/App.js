import React from "react";
import "./App.css"; // You can create this CSS file to add custom styles if needed
import Navbar from "./Navbar";
import Carousel from "./Carousel";

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      {/* Other content of your app goes here */}
      <div className="container">
        <h2>Welcome to My App</h2>
        <p>This is the home page content.</p>
      </div>
    </div>
  );
};

export default App;
