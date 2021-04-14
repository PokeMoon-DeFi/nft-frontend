import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "nft-uikit";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button
          label="Buy"
          icon="Buy"
          style={{ minWidth: 200, maxHeight: 30, backgroundColor: "red" }}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
