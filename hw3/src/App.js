import React from 'react';
import './App.css';
import Btn from "./Btn.js";
import Display from "./Display.js"

class App extends React.Component{
  constructor(props) {
    super(props)
      this.state = {
        status : 0,
        time : 0,
        isOn : false
    }
  }

  // Not started = 0
  // started = 1
  // stopped = 2
stop = () => {
  this.setState({ status : 2 })
  clearInterval(this.timer)
}

start = () => {
  this.run();
  this.setState({ status : 1})
  // this.setState({ status : 0})
   
}

run = () => {
 this.timer = setInterval(() => {this.setState({time: this.state.time + 1} )}, 1000)
}

reset = () => {
  clearInterval(this.timer)
  this.setState({time : 0 , status : 0})
}




render() {
  return (
    <div className = "container">
        <Display  time = {this.state.time}/>
        <Btn stop = {this.stop} reset = {this.reset} start = {this.start} status ={this.state.status} isOn = {this.state.isOn} />
    </div>
  )
}

}




export default App;
