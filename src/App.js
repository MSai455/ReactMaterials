import React, { Component } from 'react';


import UserInput from './UserData/UserInput';
import UserOutput from './UserData/UserOutput'


class App extends Component {

  state = {
    UserOutputs:[
     {data:'Intialtext1'},
     {data1:'Intialtext2'}
    ]
  }
  inputChangeHandler = (event) =>{

    this.setState({
      UserOutputs :[
        {data:'Intialtext1'},
  {      data1: event.target.value}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>assignment1</h1>
        <UserInput 
        changed ={this.inputChangeHandler} 
        defaultValue={this.state.UserOutputs[1].data1}/>
        <UserOutput data={this.state.UserOutputs[0].data}/>
        <UserOutput data={this.state.UserOutputs[1].data1}/>
      </div>
    );
  }
}

export default App;
