import "../styles/input.css";

export default function InputComponent({ input, handleChange, handleSubmit }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Type your task..."
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
