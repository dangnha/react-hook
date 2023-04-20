import "./nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#">To do List</a>
        </li>
        <li>
          <a href="#">Covid 19 tracker</a>
        </li>
        <li>
          <a href="#">Search Youtube</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
