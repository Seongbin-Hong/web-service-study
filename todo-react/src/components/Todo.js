import { useRef } from "react";
import { useState } from "react";

function Todo({ todo, deleteTodo, updateTodo }) {
  const liStyle = {
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const buttonStyle = {
    border: "0",
    padding: "15px 25px",
    display: "inline-block",
    textAlign: "center",
    fontSize: "20px",
    backgroundColor: "white",
  };
  const [isUpdating, setIsUpdating] = useState(false);
  const updateInputRef = useRef("");

  const handleClickUpdateBtn = () => {
    setIsUpdating(true);
  };

  const handleDoneUpdating = () => {
    if (updateInputRef.current.value !== "") {
      updateTodo({
        id: todo.id,
        title: updateInputRef.current.value,
      });
    }

    setIsUpdating(false);
  };

  const handleDoneUpdatingByEnter = (e) => {
    const { key } = e;

    if (
      (key === "Enter" || key === "NumpadEnter") &&
      updateInputRef.current.value !== ""
    ) {
      updateTodo({
        id: todo.id,
        title: updateInputRef.current.value,
      });

      setIsUpdating(false);
    }
  };

  if (!isUpdating) {
    return (
      <li style={liStyle}>
        {todo.title}
        <div>
          <button
            style={{ ...buttonStyle, color: "orange" }}
            onClick={handleClickUpdateBtn}
          >
            ●
          </button>
          <button
            style={{ ...buttonStyle, color: "red" }}
            onClick={() => deleteTodo(todo.id)}
          >
            ●
          </button>
        </div>
      </li>
    );
  } else {
    return (
      <li style={liStyle}>
        <input
          ref={updateInputRef}
          type="text"
          placeholder={todo.title}
          onKeyPress={handleDoneUpdatingByEnter}
        />
        <div>
          <button
            style={{ ...buttonStyle, color: "green" }}
            onClick={handleDoneUpdating}
          >
            ●
          </button>
        </div>
      </li>
    );
  }
}

export default Todo;
