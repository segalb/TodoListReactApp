import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine'
import TodoList from './TodoList'

var dummyData=[{taskText : "clean", completed:false},
{taskText : "build", completed:false},
{taskText : "manage", completed:true},
{taskText : "renovate", completed:false}];


class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      todos:[],
    };
  // this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount (){
    this.setState({todos: dummyData})
  }

  addTodo(task){
    var tmpArr = this.state.todos.slice();
    tmpArr.push({
      taskText : task ,
      completed:false
    })
    this.setState({
      todos : tmpArr
    })
  }

  removeTodo(index){
    var tmpArr = this.state.todos.slice();
    tmpArr.splice(index,1)
    this.setState({
      todos : tmpArr
    })
  }

  toggleTodo(index){
    var tmpArr = this.state.todos.slice();
    tmpArr[index].completed=!tmpArr[index].completed;
    this.setState({
      todos : tmpArr
    })
  }

  render(){
    return(
      <div>
      <InputLine  submit={(task) => this.addTodo(task)}/>
    <TodoList todos={this.state.todos}
      todoXClick ={(task) => this.removeTodo(task)}
      toggleTodo ={(toggle) => this.toggleTodo(toggle)} />
</div>
    );
  }
}

export default TodoApp;
