import { useState } from "react";

import InputComponent from "../components/InputComponent";

export default function InputContainer({ tasks, setTasks }) {
  const [input, setInput] = useState("");

  function handleChange({ target }) {
    setInput(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let task = {
      id: tasks.length + 1,
      content: input,
      isDone: false,
    };

    setTasks((tasks) => [...tasks, task]);
    setInput("");
  }

  return (
    <InputComponent
      input={input}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
