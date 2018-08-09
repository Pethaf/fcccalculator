import React, { Component } from 'react';
import Button from "./Button";
import DisplayComponent from "./DisplayComponent";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>CALCUTRON 6000</p>
          <p>ELECTRONIC CALCULATOR</p>
          <DisplayComponent id="display" content="RESULT" />
          <DisplayComponent id="display2" content="EXPRESSION" />
          <div class="wrapper">
            <Button id="seven" symbol="7"/>
            <Button id="four" symbol="4" />
            <Button id="one" symbol = "1" />
            <Button id="decimal" symbol="." />
          </div>
          <div class="wrapper">
            <Button id="eight" symbol="8"/>
            <Button id="five" symbol="5" />
            <Button id="two" symbol="2" />
            <Button id="zero" symbol="0" />
          </div>
          <div class="wrapper">
            <Button id="nine" symbol="9"/>
            <Button id="six" symbol="6" />
            <Button id="three" symbol ="3" />
            <Button id="equals" symbol="=" />
          </div>
          <div class="wrapper">
            <Button id="clear" symbol ="AC" />
            <Button id="divide" symbol ="\" />
            <Button id="multiply" symbol ="X" />
            <Button id="subtract" symbol="-" />
            <Button id="add" symbol ="+" />

            </div>
      </div>
    );
  }
}

export default App;
