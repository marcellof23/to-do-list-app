import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
function TodoList() {
	const [todos, setTodos] = useState([]);
	return (
		<div className="todo-app">
			<TodoForm />
		</div>
	);
}

export default TodoList;
