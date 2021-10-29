import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {

    const dispatch = useDispatch();

    const removeTodo = () => {
        dispatch({ type: 'REMOVE', payload: todo })
    }

    return (
        <li>
            {todo} 
            <button onClick={removeTodo}>
                X
            </button>
        </li>
    )
}

export default Todo;