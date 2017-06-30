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
  }

  componentDidMount (){
    this.setState({todos: dummyData})
  }
  render(){
    return(
      <div>
      <InputLine  />
    <TodoList todos={this.state.todos}/>
</div>
    );
  }
}

export default TodoApp;
