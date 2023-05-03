import { Link } from "react-router-dom";
import button from "react-bootstrap/button";

const NotFound = () => {
  return (
    <div>
      <h1>The page's not exist!</h1>
      <Link to="/">
        <button>Back to home</button>
      </Link>
    </div>
  );
};
export default NotFound;
