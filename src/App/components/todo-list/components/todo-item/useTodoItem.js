import { useCallback } from "react";

export const useTodoItem = ({ setTodos, todo }) => {
  const onChange = useCallback(
    (newTodo) =>
      setTodos((todos) =>
        todos.map((todo) => {
          if (todo.id === newTodo.id) {
            return newTodo;
          }
          return todo;
        })
      ),
    [setTodos]
  );

  const onDelete = useCallback(
    (todo) => setTodos((todos) => todos.filter((t) => t.id !== todo.id)),
    [setTodos]
  );

  const handleChange = useCallback(
    (e) => {
      onChange({
        ...todo,
        isCompleted: e.target.checked,
      });
    },
    [onChange, todo]
  );

  const handleDelete = useCallback(() => {
    onDelete(todo);
  }, [onDelete, todo]);

  return {
    handleChange,
    handleDelete,
  };
};
