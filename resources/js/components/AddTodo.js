import React, { useState, useContext, useRef, useEffect } from "react";
import TodosContext from "./../context/todoContext";

export default function AddTodo() {
    const { state, dispatch } = useContext(TodosContext);
    const [value, setValue] = useState("");

    let ref = useRef();

    useEffect(() => {
        ref.current.focus();
    }, []);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim === "") {
            alert("Cannot be blank");
        } else {
            dispatch({
                type: "ADD_TODO",
                payload: value,
            });
            setValue("");
        }
    };
console.log(state);
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <div className="form-control">
                <input
                    type="text"
                    placeholder="Add a todo"
                    ref={ref}
                    onChange={handleChange}
                    value={value}
                />
            </div>
        </form>
    );
}
