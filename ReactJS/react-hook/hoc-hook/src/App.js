import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav.js";
import "./Style/global.scss";
import { useState } from "react";

const App = () => {
  let [name, setName] = useState("Dangnha");
  let status = " is learning react hook";
  let link =
    "https://www.youtube.com/watch?v=VFnjh1yLL0o&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=14";
  let obj = { name: "kufu", status: "is learning print object" };
  const handleClick = () => {
    alert(name);
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello my name is {name}</p>
        <input type="text" onChange={(e) => handleInputChange(e)} />
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
