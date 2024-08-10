import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="min-h-screen bg-text overflow-x-hidden">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
