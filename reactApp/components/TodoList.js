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
      {this.props.todos.map((data,i)=> {return <Todo item={data.taskText} completed={data.completed} index={i}/>})}
    </ul>);
  }
}


export default TodoList;
