import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      typedText: ""
    }
  }

  handleTyping(event){
    console.log(event.target.value);
    this.setState({typedText: event.target.value});
  }

  handleSubmit(event){
    this.props.submit(this.state.typedText);
    this.setState({typedText: ""});
  }

  render(){
    return(

      <div>
        <input type="text" placeholder="task"
          onChange={(event) => this.handleTyping(event)} value={this.state.typedText}>
        </input>
        <button onClick={(event) => this.handleSubmit(event)}>Add todo</button>
      </div>
    );
  }
}


export default InputLine;
