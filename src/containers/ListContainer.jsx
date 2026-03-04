import TaskContainer from "./TaskContainer";

export default function ListContainer({ tasks, toggleTaskStatus, removeTask }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskContainer
          key={task.id}
          task={task}
          removeTask={removeTask}
          onToggle={() => toggleTaskStatus(task.id)}
        />
      ))}
    </>
  );
}
