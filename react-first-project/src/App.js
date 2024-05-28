import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar"
import MainContent from "./MainContent"


function App () {
  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App; 