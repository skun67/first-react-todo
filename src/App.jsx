import { useState } from "react";

import InputContainer from "./containers/InputContainer";
import InfoContainer from "./containers/InfoContainer";
import ListContainer from "./containers/ListContainer";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const doneNumber = tasks.filter((task) => task.isDone).length;

  function toggleTaskStatus(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <InputContainer tasks={tasks} setTasks={setTasks} />
      <InfoContainer doneNumber={doneNumber} />
      <ListContainer tasks={tasks} toggleTaskStatus={toggleTaskStatus} />
    </div>
  );
}
