const INITIAL_STATE = { memes: []}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD":
            return {...state, memes: [...state.memes, action.payload]}

        case "REMOVE":
            return {...state, memes: state.memes.filter(m => m !== action.payload)}

        default:
            return state;
    }
}

export default rootReducer;