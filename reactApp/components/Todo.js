import React from 'react';
import ReactDOM from 'react-dom';




class Todo extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <li
        style={ this.props.completed ? {textDecoration:"line-through"}:{} }>
        <button
          onClick={this.props.xClick}
          type="button">x
        </button>
        {this.props.item}
        <button
          onClick={this.props.toggleTodoClick}
          type="button">toggle
        </button>
      </li>
    );
  }
}


export default Todo;
