import useFetch from "../customize/fetch.js";
import { Link } from "react-router-dom";
import "../Style/global.scss";

const Blog = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const {
    dataOutput: dataBlog,
    isLoading,
    isErr,
    message,
  } = useFetch(url, false);

  let newData = [];
  dataBlog && dataBlog.length > 0
    ? (newData = dataBlog.slice(0, 10))
    : (newData = []);
  return (
    <div>
      <div className="Blog-title">Blog</div>
      <Link to="/add">
        <button className="btn-add">+ Add New</button>
      </Link>
      <div className="Blog-items">
        {isLoading === true &&
          dataBlog &&
          dataBlog.length > 0 &&
          newData.map((item) => {
            return (
              <div key={item.id} className="Blog-items-child">
                <div className="Blog-name">
                  {item.id} - {item.title}
                </div>
                <div className="Blog-description">{item.body}</div>
                <Link to={`/blogs/${item.id}`}>
                  <button>Read more</button>
                </Link>
              </div>
            );
          })}
        {isLoading === false && (
          <div className="load-data">
            <div colSpan="3">Loading...</div>
          </div>
        )}
        {isErr === true && (
          <div className="load-data">
            <div colSpan="3">{message}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
