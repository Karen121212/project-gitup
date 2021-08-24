import TodoItem from "./TodoItem";

function TodoList({
  checkedAll,
  setCheckAll,
  text,
  todos,
  setTodos,
  onChange,
}) {
  return (
    <div>
      <input
        type="checkbox"
        checked={checkedAll}
        onChange={({ target: { checked } }) => {
          setCheckAll(checked);
          setTodos(
            todos.map((singletodo) => ({ ...singletodo, isCompleted: checked }))
          );
        }}
      />
      <span>All</span>
      {todos.map((todo) => {
        return (
          <TodoItem
            text={text}
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
