import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Component, useState } from 'react';
import { Row } from 'react-bootstrap';
import {SketchPicker  } from 'react-color'

class App extends Component{
  constructor(){
    super()
    this.state = {color:'#fdf'};
  }


  handlePush() {
    fetch('http://127.0.0.1:8080/', {
  method: 'POST',
  headers: {
    Accept: 'text/plain',
    'Content-Type': 'text/plain'
  },
  body: JSON.stringify({
    firstParam: this.state.color.hex,
    secondParam: 'colour2'
  })});}
  
  render(){return (
    <div class = "container">
      <div class = "row">
        <div class="col-2">
          <t1>Hi bro</t1>
        </div>
        <div class="col">
          <Button onClick={() => this.handlePush()}>test</Button>
        </div>
      </div>
      <div class = "row">
        <div class="col">
          <SketchPicker  color={this.state.color} onChange={updatedColor => this.setState ({color:updatedColor})}/>
        </div>

      </div>
    </div>
  );}
}

export default App;
