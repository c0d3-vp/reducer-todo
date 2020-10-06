import React from 'react';

const Task = props => {
  return (
    <div
      className={`task ${props.data.completed ? 'completed' : ''}`}>
      <p><input type="checkbox" /> {props.data.item}</p>
    </div>
  );
};

export default Task;