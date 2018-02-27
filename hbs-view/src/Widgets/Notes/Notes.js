import React, {Component} from 'react';
import WidgetClasses from './../CSS/Widgets.css';
import classes from './Notes.css';


const TodoForm = ({addTodo}) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <div className={classes.InputWrapper}>
      <input className={classes.InputField} placeholder="Enter Your Note..." ref={node => {
        input = node;
      }} />
    <button className={classes.AddButton} onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}>
       Add Note
      </button>
    </div>
  );
};

const Todo = ({todo, remove}) => {
  // Each Todo
  return (<li className={classes.listItem} onClick={() =>
      {remove(todo.id)}}>
      {todo.text}</li>);
}

const TodoList = ({todos, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove}/>)
  });
  return (<ul className={classes.list}>{todoNode}</ul>);
}


const Title = () => {
  return (
    <div >
      <h4 className={WidgetClasses.widgetDescriptionNotes}>Notes</h4>
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
        <div className={WidgetClasses.widgetNote}>
          <div className={classes.NotesContainer}>
            <Title/>
            <TodoForm addTodo={this.addTodo.bind(this)}/>
            <TodoList
              todos={this.state.data}
              remove={this.handleRemove.bind(this)}
              />
            <div className={classes.DeleteWrapper}>
              <div className={classes.delInfoPlace}></div>
              <div className={classes.removeInfo}>Click To Remove</div>
            </div>

          </div>
        </div>
      );
    }
  }
export default Notes;
