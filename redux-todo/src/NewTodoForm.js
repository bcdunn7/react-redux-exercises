import { useState } from "react";
import { useDispatch } from "react-redux";

const NewTodoForm = () => {

    const INITIAL_STATE = {
        todo: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD', payload: formData})
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">New Todo: </label>
            <input 
                name="todo"
                type="text"
                value={formData.todo}
                onChange={handleChange}
            />
            <button>Submit!</button>
        </form>
    )
}

export default NewTodoForm;