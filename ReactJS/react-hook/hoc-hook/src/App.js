import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav.js";

const App = () => {
  let name = "dangnha";
  let status = " is learning react hook";
  let link =
    "https://www.youtube.com/watch?v=oeKJ0DiGihg&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=11";
  let obj = { name: "kufu", status: "is learning print object" };
  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world! {name} + {status}
        </p>
        <a
          className="App-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link of this video
        </a>
        <p>{JSON.stringify(obj)}</p>
      </header>
    </div>
  );
};

export default App;
