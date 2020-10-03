import React, { Component } from 'react';
import UserInput from './UserData/UserInput';
import UserOutput from './UserData/UserOutput'
import History from './UserData/History'


class App extends Component {

  state = {
    UserOutputs:[
     {data:'Intialtext1'},
     {data1:'Intialtext2'}
    ],
    HistoryData: []
  }
  inputChangeHandler = (event) =>{

    this.setState({
      UserOutputs :[
        {data:'Intialtext1'},
  {      data1: event.target.value}
      ]
    })
  }
  addInputtoHistory =(event) => {
let addHistoryData = event.target.value;
let updatedHistoryData =[...this.state.HistoryData];
updatedHistoryData.push(addHistoryData);
    this.setState({ HistoryData : updatedHistoryData})
    console.log("History Data",this.state.HistoryData);
    console.log("value:",event.target.value);
    console.log("Assigned Array:",updatedHistoryData);
  }


  render() {
   
    
    
    const style ={
      backgroundcolor:'grey',
      font:'inherit',
      border: '1x solid blue',
      padding : '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>assignment1</h1>
        <UserInput 
        changed ={this.inputChangeHandler} 
        defaultValue={this.state.UserOutputs[1].data1}/>
        <UserOutput data={this.state.UserOutputs[0].data}/>
        <UserOutput data={this.state.UserOutputs[1].data1}/>
        <input type="text" onBlur={(event) =>{this.addInputtoHistory(event)}}></input>
        <History myLists={this.state.HistoryData} />
      </div>
    );
  }
}




export default App;
