import React, { useContext } from "react";
import TodosContext from "./../context/todoContext";
import Todo from "./Todo";

export default function TodoList() {
    const { state } = useContext(TodosContext);
    return (
        <div>
            {state.todos.map((todo) => {
                return <Todo todo={todo} key={todo.id} />;
            })}
        </div>
    );
}
