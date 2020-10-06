import React, { useState, useReducer } from "react";

import { todoList, reducer } from "../reducers/reducer";

const AddTask = () => {
  const [newTask, setNewTask] = useState("");
  const [state, dispatch] = useReducer(reducer, todoList);
  console.log(state);

  const handleChanges = e => {
    setNewTask(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.addTask}{" "}
          <i
            onClick={() => dispatch({ type: "UPDATE_EDITING" })}
            className="far fa-edit"
          />
        </h1>
      ) : (
        <div>
          <input
            className="task-input"
            type="text"
            name="newTask"
            value={newTask}
            onChange={handleChanges}
          />
          <button
            onClick={() =>
              dispatch({ type: "ADD_TASK", payload: newTask })
            }
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTask;
