import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo'

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <ul>
      {this.props.todos.map((data,i)=> {
        return <Todo item={data.taskText}
                completed={data.completed}
                xClick ={() => this.props.todoXClick(i)}
                toggleTodoClick ={() => this.props.toggleTodo(i)}
                key={i}/>})}
    </ul>);
  }
}


export default TodoList;
