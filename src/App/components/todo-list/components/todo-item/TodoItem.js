import { useHistory } from "react-router-dom";
import { useTodoItem } from "./useTodoItem";
import "./item.css/check.css";

function TodoItem({ text, todo, setTodos }) {
  const history = useHistory();
  const { handleChange, handleDelete } = useTodoItem({ setTodos, todo });
  return (
    <div className="itemstyle" style={{ width: "100%" }}>
      <div
        style={{
          display: "inline-block",
        }}
      >
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={handleChange}
        />

        <div style={{ display: "inline-block" }}>
          <span
            onClick={() => {
              history.push(`/itempage/${todo.id}`);
            }}
            style={{
              backgroundColor: todo.text === text ? "red" : "white",
            }}
          >
            {todo.text}
          </span>
        </div>
      </div>

      <button onClick={handleDelete} className="xstyle">
        X
      </button>
    </div>
  );
}

export default TodoItem;
