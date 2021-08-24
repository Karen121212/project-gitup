import { useMemo, useState } from "react";

import "./App.css";
import { mokTodos } from "./components/todo-list/components/todo-item/constants";

import TodoFooter from "./components/todo-footer/TodoFooter";
import TodoForm from "./components/todo-form/TodoForm";
import TodoList from "./components/todo-list/components/todo-item/TodoList";
// import HomePage from "../pages/homepage/HomePage";

import "../input.css";
import "./button.css";
// import { Route, Switch } from "react-router-dom";

const App = () => {
  //useState
  const [checkedAll, setCheckAll] = useState(false);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(mokTodos);

  // <Switch>
  //   <Route path="/homepage" exact component={HomePage} />
  // </Switch>;

  //useMemo
  const tasks = useMemo(
    () =>
      todos.map((el) => {
        return el.text;
      }),
    [todos]
  );

  return (
    <div className="App">
      <TodoForm
        tasks={tasks}
        text={text}
        setText={setText}
        onDelete={(text) => {
          setText("");
        }}
        onAdd={(text) => {
          setTodos([
            ...todos,
            {
              id: Math.random(),
              text: text,
              isCompleted: false,
            },
          ]);
          setText("");
        }}
      />

      <TodoList
        text={text}
        todos={todos}
        setTodos={setTodos}
        setCheckAll={setCheckAll}
        checkedAll={checkedAll}
      />
      <TodoFooter
        setCheckAll={setCheckAll}
        checkedAll={checkedAll}
        todos={todos}
        onClearCompleted={() =>
          setTodos(todos.filter((todo) => !todo.isCompleted))
        }
      />
    </div>
  );
};

export default App;
