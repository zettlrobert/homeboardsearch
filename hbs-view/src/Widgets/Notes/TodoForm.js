import React, {Component} from 'react';
import classes from './Notes.css';

const TodoForm = ({addTodo}) => {
//Input Tracker
  let input;

  return (
    <div>
      <input ref={node => {
          input = node;
        }} />
      <button onClick={() => {
          addTodo(input.value);
          input.value = '';
        }}>

        +

      </button>
    </div>

  );
}

export default TodoForm;
