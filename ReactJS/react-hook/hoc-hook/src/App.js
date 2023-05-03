import "./App.css";
import Nav from "./views/Nav.js";
import "./Style/global.scss";
import TodoApp from "./views/TodoApp.js";
import Home from "./views/Home.js";
import Covid19 from "./views/Covid19.js";
import Blog from "./views/Blog.js";
import SearchYoutube from "./views/SearchYoutube.js";
import NotFound from "./views/NotFound.js";
import BlogDetail from "./views/BlogDetail.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <header className="App-header">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todolist">
              <TodoApp />
            </Route>
            <Route path="/covid19">
              <Covid19 />
            </Route>
            <Route path="/blogs" exact>
              <Blog />
            </Route>
            <Route path={`/blogs/:id`} exact>
              <BlogDetail />
            </Route>
            <Route path="/youtube">
              <SearchYoutube />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
};

export default App;
