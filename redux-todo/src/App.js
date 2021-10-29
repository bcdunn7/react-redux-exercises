import NewTodoForm from './NewTodoForm';
import { useSelector } from 'react-redux';
import Todo from './Todo';

function App() {

	const todos = useSelector(state => state.todos)

	return (
		<div className="App">
			<h2>Todos!</h2>
			<NewTodoForm />
			<ul>
				{todos.map(t => <Todo todo={t.todo}/>)}
			</ul>
		</div>
	);
}

export default App;
