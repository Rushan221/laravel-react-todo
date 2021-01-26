import React, { useContext } from "react";
import TodosContext from "./../context/todoContext";

export default function Todo({ todo }) {
    const { dispatch } = useContext(TodosContext);
    return (
        <div className={`task ${todo.complete ? "reminder" : ""}`}>
            <p>{todo.text}</p>
            {/* <button
                className="btn"
                onClick={() =>
                    dispatch({ type: "SET_CURRENT_TODO", payload: todo })
                }
            >
                Edit
            </button> */}
            <button
                className="btn-toggle"
                onClick={() =>
                    dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                }
            >
                Toggle
            </button>
            <button
                className="btn-delete"
                onClick={() =>
                    dispatch({ type: "DELETE_TODO", payload: todo.id })
                }
            >
                Delete
            </button>
        </div>
    );
}
