import "../Style/global.scss";
const ListTodo = (props) => {
  let todos = props.todos;

  return (
    <div className="Todo-child">
      {todos.map((todo) => {
        return (
          <div className="Todo-item" key={todo.id}>
            <div>
              <div className="Todo-name">{todo.name}</div>
              <div className="Todo-button">
                <div className="Todo-button-child">Edit</div>
                <div
                  className="Todo-button-child"
                  onClick={() => props.handleDelete(todo.id)}
                >
                  Delete
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListTodo;
