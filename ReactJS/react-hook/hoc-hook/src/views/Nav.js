import { Link, NavLink } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          {/* className="active" */}
          <NavLink activeClassName="active" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/todolist">
            To do List
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/covid19">
            Covid 19 tracker
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/youtube">
            Search Youtube
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
