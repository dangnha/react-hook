import "../Style/global.scss";
import { useState } from "react";
import ListTodo from "./ListTodo";

const TodoApp = () => {
  let [todo, setTodo] = useState("");
  let [todos, setTodos] = useState([
    { id: "todo1", name: "Learning react" },
    { id: "todo2", name: "Learning react native" },
    { id: "todo3", name: "Learning nodejs" },
    { id: "todo4", name: "Learning mongodb" },
  ]);
  const handleDelete = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
    setTodos([...todos]);
  };

  const handleClick = () => {
    if (!todo) {
      alert("Empty todo!");
      return;
    }
    let currentTodo = {
      id: `todo0${Math.floor(Math.random() * 100)}`,
      name: todo,
    };
    setTodos([...todos, currentTodo]);
    setTodo("");
  };
  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="Todo-App">
      <input
        type="text"
        value={todo}
        onKeyPress={(e) => handleKeyPress(e)}
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={() => handleClick()}>Add todo</button>
      <p>My to-do list: </p>
      <div className="Todo-container">
        <ListTodo todos={todos} handleDelete={handleDelete}></ListTodo>
      </div>
    </div>
  );
};

export default TodoApp;
