import React, { Component } from 'react';
import ScoreDisplay from './ScoreDisplay.js';

class Game extends Component {
  constructor(props){
    super(props);
    // create first equation and initialize game state
    const initialValues = this.createNewEquation();
    this.state = {
      value1: initialValues[0],
      value2: initialValues[1],
      value3: initialValues[2],
      proposedAnswer: initialValues[3],
      numQuestions: 0,
      numCorrect: 0,
    }
  }

  // create and return a new array of equation values
  createNewEquation = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

    return [value1, value2, value3, proposedAnswer];
  }
  
  // use player's answer to progress game
  onAnswer = event => {
    // get answer we chose, initialize point value, destructure current game state values
    const answer = event.target.name;
    let point = 0;
    const { value1, value2, value3, proposedAnswer } = this.state;

    // determine if answer was correct, assign point value
    (value1 + value2 + value3 === proposedAnswer && answer === 'true') ||
    (value1 + value2 + value3 !== proposedAnswer && answer === 'false') ? point = point + 1 : point = point + 0;

    // create new equation values
    const newEquation = this.createNewEquation();

    // update Game's state with a new equation and the current score
    this.setState((curState) => ({
      value1: newEquation[0],
      value2: newEquation[1],
      value3: newEquation[2],
      proposedAnswer: newEquation[3],
      numQuestions: curState.numQuestions + 1,
      numCorrect: curState.numCorrect + point,
    }))
  }

  render() {
    const { value1, value2, value3, proposedAnswer } = this.state;

    return (
      <div>
        {/** display equation */}
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>

        {/** display answer buttons */}
        <button onClick={this.onAnswer} name="true">
          True
        </button>
        <button onClick={this.onAnswer} name="false">
          False
        </button>

        {/** display score */}
        <ScoreDisplay
          numCorrect={this.state.numCorrect}
          numQuestions={this.state.numQuestions}
        />
      </div>
    )
  }
}

export default Game;