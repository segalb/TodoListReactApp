import React from 'react';
import ReactDOM from 'react-dom';

var dummyData=["clean","brush","buy","build"];

class Todo extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <li key={this.props.index}> <button type="button">x</button> {this.props.item}</li>

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
      {dummyData.map((data,i)=> {return <Todo item={data} index={i}/>})}
    </ul>);
  }
}





ReactDOM.render(<TodoList />, document.getElementById('root'));
