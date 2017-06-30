import React from 'react';
import ReactDOM from 'react-dom';




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


export default Todo;
