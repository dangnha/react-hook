import "./form.scss";
import { useState } from "react";

const AddNew = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmitButton = (e) => {
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
    const newBlog = {
      title: title,
      body: content,
    };
    console.log(newBlog);
    e.preventDefault();
  };
  return (
    <div>
      <h1>Add new blog</h1>
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
          cols="70"
          rows="10"
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
