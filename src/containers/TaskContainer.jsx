import "../styles/task.css";
import { Trash } from "lucide-react";

export default function TaskContainer({ task, onToggle, removeTask }) {
  return (
    <div
      className={`task-item ${task.isDone ? "is-done" : ""}`}
      onClick={onToggle}
    >
      <p>{task.content}</p>
      <input type="checkbox" checked={task.isDone} />
      <Trash
        className="trash"
        color="red"
        size={22}
        onClick={() => removeTask(task.id)}
      />
    </div>
  );
}
