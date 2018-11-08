import React from 'react';

const ScoreDisplay = props => {
  return(
    /** player's score */
    <p className="text">
      Your Score: {props.numCorrect}/{props.numQuestions}
    </p>
  )
}

export default ScoreDisplay;