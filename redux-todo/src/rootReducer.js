const INITIAL_STATE = { todos: [] };

const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "ADD":
            return {...state, todos: [...state.todos, action.payload]}
        
        case "REMOVE":
            return {...state, todos: state.todos.filter(t => t.todo !== action.payload)}
        
        default:
            return state;
    }
}

export default rootReducer;