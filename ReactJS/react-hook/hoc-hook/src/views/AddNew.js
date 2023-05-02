import "./form.scss";
import { useState } from "react";
import axios from "axios";

const AddNew = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    if (!title && !content) {
      alert("Please enter a title and content");
      return;
    } else if (!title) {
      alert("Please enter a title");
      return;
    } else if (!content) {
      alert("Please enter a content");
      return;
    }
    let data = {
      userId: 1,
      title: title,
      body: content,
    };

    let res = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      data
    );

    if (res && res.data) {
      let newBlog = res.data;
      props.handleAddNew(newBlog);
    }
  };

  return (
    <div>
      <form className="form-add-blog" onSubmit={handleSubmitButton}>
        <div className="form-title">
          <label htmlFor="title">Blog title:</label>
          <input
            type="text"
            placeholder="Your blog's title"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <label htmlFor="body">Blog body:</label>
        <textarea
          cols="40"
          rows="5"
          type="text"
          placeholder="Write your blog's content"
          onChange={(event) => setContent(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddNew;
