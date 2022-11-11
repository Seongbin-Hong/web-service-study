import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import axios from "axios";

const BASE_URL = "http://localhost:3030/api/todos";

function TodoBox() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const result = await axios.get(BASE_URL);
    setTodos(result.data);
  };

  const handleResisteringTodo = async (e) => {
    const result = await axios.post(BASE_URL, { title: e });

    setTodos(result.data);
  };

  const deleteTodo = async (id) => {
    const result = await axios.delete(`${BASE_URL}/${id}`);
    setTodos(result.data);
  };

  const updateTodo = async (todo) => {
    const result = await axios.patch(`${BASE_URL}`, {
      id: todo.id,
      title: todo.title,
    });

    setTodos(result.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <TodoInput registerTodo={handleResisteringTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default TodoBox;
