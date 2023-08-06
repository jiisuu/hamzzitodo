const Input = ({ task, setTask, onClickHandler }) => {
  return (
    <input
      value={task}
      id="todo-input"
      type="text"
      placeholder="Enter a task"
      onChange={(e) => setTask(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          onClickHandler();
        }
      }}
    />
  );
};

export default Input;
