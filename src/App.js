import "./App.css";
import { useState } from "react";
import List from "./components/list/List";
import Form from "./components/form/Form";

function App() {
  const [text, settext] = useState([
    {
      id: Math.random(),
      text: "learn JS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "learn css",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "learn react",
      isCompleted: false,
    },
  ]);
  return (
    <div className="App">
      <Form />
      <List text={text} />;
    </div>
  );
}

export default App;
