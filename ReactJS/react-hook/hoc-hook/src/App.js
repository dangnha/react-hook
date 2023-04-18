import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav.js";
import "./Style/global.scss";
import { useState } from "react";

const App = () => {
  const [name] = useState("Dangnha");
  let status = " is learning react hook";
  let link =
    "https://www.youtube.com/watch?v=6Byk6yd_zCQ&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=13";
  let obj = { name: "kufu", status: "is learning print object" };
  const handleClick = () => {
    alert("Successfully!");
  };
  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" value={name} />
        <button onClick={() => handleClick()}>Click me!</button>
        <a
          className="App-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link of this video
        </a>
      </header>
    </div>
  );
};

export default App;
