import TaskContainer from "./TaskContainer";

export default function ListContainer({ tasks, toggleTaskStatus }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskContainer
          key={task.id}
          task={task}
          onToggle={() => toggleTaskStatus(task.id)}
        />
      ))}
    </>
  );
}
