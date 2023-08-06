import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const deleteTask = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const onClick = () => {
    setList([...list, task]);
    setTask("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Input task={task} setTask={setTask} onClickHandler={onClick} />
      <Button onClickHandler={onClick} />
      <ul id="todo-list">
        {list.map((todo, index) => (
          <li key={index} onClick={() => deleteTask(index)}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
