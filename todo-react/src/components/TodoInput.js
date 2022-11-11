import { useRef } from "react";

function TodoInput({ registerTodo }) {
  const inputRef = useRef();

  const handleEnter = (e) => {
    const { key } = e;

    if (
      (key === "Enter" || key === "NumpadEnter") &&
      inputRef.current.value !== ""
    ) {
      registerTodo(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="할 일을 입력하세요."
      onKeyPress={handleEnter}
    />
  );
}

export default TodoInput;
