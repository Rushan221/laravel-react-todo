import { createContext } from "react";

const TodosContext = createContext({
    currentTodo: null,
    todos: [
        {
            id: 1,
            text: "Do Homework",
            complete: false,
        },
        {
            id: 2,
            text: "Learn React state and props",
            complete: false,
        },
        {
            id: 3,
            text: "Learn React Hooks",
            complete: false,
        },
    ],
});

export default TodosContext;
