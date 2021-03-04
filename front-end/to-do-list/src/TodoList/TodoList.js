import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
function TodoList() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) return;

		setTodos([todo, ...todos]);
	};

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const removeTodo = (id) => {
		const removed = [...todos].filter((td) => td.id !== id);
		setTodos(removed);
	};

	const updateTodo = (id, newVal) => {
		if (!newVal.text || /^\s*$/.test(newVal.text)) return;

		setTodos((prevVal) =>
			prevVal.map((item) => (item.id === id ? newVal : item))
		);
	};

	return (
		<div className="todo-app">
			<h1>Add you plan below!</h1>
			<TodoForm onSubmit={addTodo} />
			<h3 className="Click-plan">
				Click on the plan if you have completed the task!
			</h3>
			<Todo
				todos={todos}
				completeTodo={completeTodo}
				removeTodo={removeTodo}
				updateTodo={updateTodo}
			/>
		</div>
	);
}

export default TodoList;
