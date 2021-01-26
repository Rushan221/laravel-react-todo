export default function reducer(state, action) {
    switch (action.type) {
        case "SET_CURRENT_TODO":
            return {
                ...state,
                currentTodo: action.payload,
            };
        case "DELETE_TODO":
            const deletedTodos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
            return {
                ...state,
                todos: deletedTodos,
            };
        case "ADD_TODO":
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                complete: false,
            };
            const addedTodos = [...state.todos, newTodo];

            return {
                ...state,
                todos: addedTodos,
            };
        case "TOGGLE_TODO":
            const updatedTodos = toggle(state.todos, action.payload);
            return {
                ...state,
                todos: updatedTodos,
            };
        default:
            return state;
    }
}

function toggle(todos, id) {
    const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
            return { ...todo, complete: !todo.complete };
        }
        return todo;
    });
    return updatedTodos;
}
