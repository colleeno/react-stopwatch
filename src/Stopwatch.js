import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    // initial state
    super(props)
    this.state = {
      firstStart: false,
      isStart: false,
      timer: 0,
    }
    this.onStartClick = this.onStartClick.bind(this);
    this.onResetClick = this.onResetClick.bind(this);
    this.onPauseClick = this.onPauseClick.bind(this);
  }
  onStartClick() {
    // on start click set start to true and add 1 to timer every second
    this.counter = setInterval( (event) =>
    this.setState({
      firstStart: true,
      isStart: true,
      timer: this.state.timer + 1 }), 1000)
    }

  onResetClick(event) {
    // on reset stop the counter
    clearInterval(this.counter)
    // set the states back to 0
    this.setState({isStart: false, timer: 0})
  }

  onPauseClick(event) {
    // on pause stop counter

    // set timer to its current state

    if (this.state.isStart === true){
      clearInterval(this.counter)
      this.setState({isStart: false, timer: this.state.timer})
    }
    else {
      this.counter = setInterval( (event) =>
      this.setState({
        isStart: true,
        timer: this.state.timer + 1 }), 1000)
    }
  }

  render() {
    let controls;
    if (this.state.firstStart === false ){
      controls =
      <div className="controls">
      <button onClick={this.onStartClick}>Start</button>
      </div>
    }
    else {
      controls =
      <div className="controls">
      <button onClick={this.onResetClick}>Reset</button>
      <button onClick={this.onStartClick}>Start</button>
      <button onClick={this.onPauseClick}>Pause</button>
      </div>
    }
    return (
      <div className="stopwatch">
        <h1>{this.state.timer ? this.state.timer : <span>{this.state.timer}</span>}</h1>
        <div>
          {controls}
        </div>
      </div>
    );
  }
}

export default Stopwatch;
