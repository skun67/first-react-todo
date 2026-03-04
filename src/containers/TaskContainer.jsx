import "../styles/task.css";

export default function TaskContainer({ task, onToggle }) {
  return (
    <div
      className={`task-item ${task.isDone ? "is-done" : ""}`}
      onClick={onToggle}
    >
      <p>{task.content}</p>
      <input type="checkbox" checked={task.isDone} />
    </div>
  );
}
