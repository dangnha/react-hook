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
          <a href="#">Java</a>
        </li>
        <li>
          <a href="#">HTML</a>
        </li>
        <li>
          <a href="#">CSS</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
