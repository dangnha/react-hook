import useFetch from "../customize/fetch.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../Style/global.scss";
import AddNew from "./AddNew.js";
const Blog = () => {
  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // fetch
  const url = "https://jsonplaceholder.typicode.com/posts";
  const {
    dataOutput: dataBlog,
    isLoading,
    isErr,
    message,
  } = useFetch(url, false);

  useEffect(() => {
    if (dataBlog && dataBlog.length > 0) {
      let newDataSimple = dataBlog.slice(0, 10);
      setNewData(newDataSimple);
    }
  }, [dataBlog]);

  const [newData, setNewData] = useState([]);

  const handleAddNew = (blog) => {
    let data = newData;
    data.unshift(blog);
    setShow(false);
    setNewData(data);
  };
  const handleDelete = (id) => {
    let data = newData;
    data = data.filter((item) => item.id !== id);
    setNewData(data);
  };

  return (
    <div>
      <div className="Blog-title">Blog</div>
      <div>
        <Button className="mb-3" variant="success" onClick={handleShow}>
          Add blog
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new blog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddNew handleAddNew={handleAddNew}></AddNew>
          </Modal.Body>
        </Modal>
      </div>

      <div className="Blog-items">
        {isLoading === true &&
          dataBlog &&
          dataBlog.length > 0 &&
          newData.map((item) => {
            return (
              <div key={item.id} className="Blog-items-child">
                <div className="Blog-name">
                  {item.id} - {item.title}{" "}
                  <span onClick={() => handleDelete(item.id)}>(X)</span>
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
