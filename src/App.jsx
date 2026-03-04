import { useEffect, useState } from "react";
import { setItem, getItem } from "./utils/localStorage";

import InputContainer from "./containers/InputContainer";
import InfoContainer from "./containers/InfoContainer";
import ListContainer from "./containers/ListContainer";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const item = getItem("tasks");
    return item || [];
  });

  useEffect(() => {
    setItem("tasks", tasks);
  }, [tasks]);

  const doneNumber = tasks.filter((task) => task.isDone).length;

  function toggleTaskStatus(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  }

  function removeTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <InputContainer tasks={tasks} setTasks={setTasks} />
      <InfoContainer doneNumber={doneNumber} />
      <ListContainer
        tasks={tasks}
        toggleTaskStatus={toggleTaskStatus}
        removeTask={removeTask}
      />
    </div>
  );
}
