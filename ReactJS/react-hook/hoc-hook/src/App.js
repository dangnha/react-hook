import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav.js";
import "./Style/global.scss";
import { useState } from "react";
import TodoApp from "./views/TodoApp.js";
import Covid19 from "./views/Covid19.js";
import { CountDown, HookCountDown } from "./views/CountDown.js";

const App = () => {
  return (
    <div className="App">
      <Nav></Nav>
      <HookCountDown></HookCountDown>
      <header className="App-header">
        {/* <TodoApp></TodoApp> */}
        <Covid19></Covid19>
      </header>
    </div>
  );
};

export default App;
