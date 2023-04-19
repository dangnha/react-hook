import "../Style/global.scss";
import { useState } from "react";

const TodoApp = () => {
  let [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", name: "Learning react" },
    { id: "todo2", name: "Learning react native" },
    { id: "todo3", name: "Learning nodejs" },
    { id: "todo4", name: "Learning mongodb" },
  ]);

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

  return (
    <div className="Todo-App">
      <p>My to-do list: </p>

      <div className="Todo-container">
        <div className="Todo-child">
          {todos.map((todo) => {
            return (
              <div className="Todo-item" key={todo.id}>
                <li>{todo.name}</li>
              </div>
            );
          })}
        </div>
      </div>

      <input type="text" value={todo} onChange={(e) => handleInputChange(e)} />
      <button onClick={() => handleClick()}>Add todo</button>
    </div>
  );
};

export default TodoApp;
