import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav.js";
import "./Style/global.scss";
import { useState } from "react";
import TodoApp from "./views/TodoApp.js";

const App = () => {
  let link =
    "https://www.youtube.com/watch?v=lTFPU8mA8kI&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=22";

  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <TodoApp></TodoApp>
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
