import Todo from "./Todo";

function TodoList({ todos, deleteTodo, updateTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
