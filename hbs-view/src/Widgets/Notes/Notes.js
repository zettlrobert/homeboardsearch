import React, {Component} from 'react';
import WidgetClasses from './../CSS/Widgets.css';
import classes from './Notes.css';


const TodoForm = ({addTodo}) => {
  // Input Tracker
  let input;
  // Return JSX
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
};

const Todo = ({todo, remove}) => {
  // Each Todo
  return (<li onClick={() =>
      {remove(todo.id)}}>
      {todo.text}</li>);
}

const TodoList = ({todos, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (<Todo className={classes.task} todo={todo} key={todo.id} remove={remove}/>)
  });
  return (<ul>{todoNode}</ul>);
}


const Title = () => {
  return (
    <div>
       <div>
          <h1>Notes</h1>
       </div>
    </div>
  );
}

// Contaner Component (Ignore for now)
class Notes extends Component{
  constructor(props){
      // Pass props to parent class
      super(props);
      // Set initial state
      this.state = {
        id: 0,
        data: []
      }
    }
    // Add todo handler
    addTodo(val){
      // Assemble data
      const todo = {text: val, id: this.state.id++};
      // Update data
      this.state.data.push(todo);
      // Update state
      this.setState({data: this.state.data});
    }
    // Handle remove
    handleRemove(id){ console.log(id);
      // Filter all todos except the one to be removed
      const remainder = this.state.data.filter((todo) => {
        console.log(todo.id, todo);
        return (todo.id !== id);
      });
      // Update state with filter
      this.setState({data: remainder});

    }

    render(){
      // Render JSX
      return (
        <div>
          <Title />
          <TodoForm addTodo={this.addTodo.bind(this)}/>
          <TodoList
            todos={this.state.data}
            remove={this.handleRemove.bind(this)}
          />
        </div>
      );
    }
  }
export default Notes;
