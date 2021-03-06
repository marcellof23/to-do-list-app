import React, { useState } from "react";

function TodoForm(props) {
	const [input, setInput] = useState("");
	const handleSubmit = (e) => {
		console.log("todoform");
		e.preventDefault();
		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});
		setInput("");
	};
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	return (
		<div>
			<form className="todo-form" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Add To-do-list"
					value={input}
					name="text"
					className="todo-input"
					onChange={handleChange}
				/>
				<button className="todo-button">Create</button>
			</form>
		</div>
	);
}

export default TodoForm;
