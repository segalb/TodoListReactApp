import React from 'react';
import ReactDOM from 'react-dom';

var dummyData=[{taskText : "clean", completed:false},
{taskText : "build", completed:false},
{taskText : "manage", completed:true},
{taskText : "renovate", completed:false}];


class Todo extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <li  key={this.props.index} style={ this.props.completed ? {textDecoration:"line-through"}:{} }> <button type="button">x</button> {this.props.item}</li>
    );
  }
}

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

class InputLine extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <input type="text" placeholder="task" ></input>
      <button type="button">x</button>
    </div>
    );
  }
}

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






ReactDOM.render(<TodoApp />, document.getElementById('root'));
