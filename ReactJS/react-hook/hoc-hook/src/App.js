import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav.js";
import "./Style/global.scss";
import { useState } from "react";
import TodoApp from "./views/TodoApp.js";
import Home from "./views/Home.js";
import Covid19 from "./views/Covid19.js";
import SearchYoutube from "./views/SearchYoutube.js";
import { CountDown, HookCountDown } from "./views/CountDown.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <header className="App-header">
          <Switch>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/todolist">
              <TodoApp />
            </Route>
            <Route path="/covid19">
              <Covid19 />
            </Route>
            <Route path="/youtube">
              <SearchYoutube />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
};

export default App;
