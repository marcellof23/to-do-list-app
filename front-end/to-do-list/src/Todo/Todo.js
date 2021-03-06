import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	});

	const submitUpdate = (value) => {
		updateTodo(edit.id, value);
		setEdit({
			id: null,
			value: "",
		});
	};
	console.log("woi");
	console.log(edit.id);
	if (edit.id) {
		return <TodoForm onSubmit={submitUpdate} />;
	}
	console.log("taek");
	return todos.map((todo, idx) => (
		<div
			className={todo.isComplete ? "todo-row complete" : "todo-row"}
			key={idx}>
			<div
				key={todo.id}
				onClick={() => completeTodo(todo.id)}
				className="todo-text">
				{todo.text}
			</div>
			<div className="icons">
				<RiCloseCircleLine
					onClick={() => removeTodo(todo.id)}
					className="delete-icon"
				/>
				<TiEdit
					onClick={() => setEdit({ id: todo.id, value: todo.value })}
					className="edit-icon"
				/>
			</div>
		</div>
	));
}
export default Todo;
