import React, { useState, useReducer } from 'react'
import './App.css'
import { reducer, todoList } from './reducers/reducer'
import Task from './components/Task';
import AddTask from './components/AddTask'




function App() {
  const [tasks, setTasks] = useState(todoList)


  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <br />
      <br />
      <div className='List'>
        {tasks.map((task) => {
          return (
            <Task key={task.id} data={task} />
          )
        })}
        <button onClick={() => {
                  /* use displatch to delete this specific message*/
                }}>Delete Completed</button>
        <br />
        <br />
        <br />

        <div className="task">
      <AddTask />
    </div>
      </div>
          {/* dispatch({ type, 'ADD_TODO' }) */}
    </div>
  );
}

export default App;
