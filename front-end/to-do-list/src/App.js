import "./App.css";
import "./Styles/base.scss";
import TodoList from "./TodoList/TodoList";

function App() {
	return (
		<div className="todo-app">
			<TodoList />
			<h1>Hello!</h1>
		</div>
	);
}

export default App;
