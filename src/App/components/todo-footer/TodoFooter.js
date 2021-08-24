function TodoFooter({ todos, onClearCompleted, setCheckAll }) {
  const completedSize = todos.filter((todo) => todo.isCompleted).length;

  todos.length === completedSize ? setCheckAll(true) : setCheckAll(false);

  return (
    <div>
      <div style={{ margin: "1%" }}>
        <span>
          {completedSize}/{todos.length} Completed
        </span>
      </div>
      <div>
        <button
          onClick={onClearCompleted}
          className="but"
          style={{ width: "24%" }}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TodoFooter;
