import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import TodosContext from "../context/todoContext";
import reducer from "./../reducers/TodoReducer";
import AddTodo from "./AddTodo";
import Header from "./Header";
import TodoList from "./TodoList";

export default function App() {
    const initialState = useContext(TodosContext);
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <TodosContext.Provider value={{ state, dispatch }}>
            <div className="container">
                <Header />
                <AddTodo />
                <TodoList />
            </div>
        </TodosContext.Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("root-app"));
