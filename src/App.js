import React from "react";
import largeLogo from "./ApartmintLogoSmall.png";
import "./App.css";
import topNavBar from "./components/topNavBar/topNavBar";

function App() {
  return (
    <div className="App">
      <topNavBar />
      <header className="App-header">
        <img src={largeLogo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
