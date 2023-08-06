const Button = ({ onClickHandler }) => {
  return (
    <button id="add-button" onClick={onClickHandler}>
      Add Task
    </button>
  );
};

export default Button;
