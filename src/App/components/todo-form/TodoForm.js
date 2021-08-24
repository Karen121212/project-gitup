// import { useState } from "react";

import "./style-form/input.css";
import "./style-form/button.css";

function TodoForm({ onDelete, onAdd, text, setText, tasks }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        tasks.includes(text) ? onDelete(text) : onAdd(text);
      }}
    >
      <input
        className="mainstyle"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {tasks.includes(text) ? (
        <button disabled={!text} className="but">
          Delete
        </button>
      ) : (
        <button disabled={!text} className="but">
          Add
        </button>
      )}
    </form>
  );
}

export default TodoForm;
