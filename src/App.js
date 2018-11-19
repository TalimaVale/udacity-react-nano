import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeamTalimaTeammates from './TeamTalimaTeammates';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className='app-header-content'>
          <div className='left-col'>
            <img src={logo} className="App-logo" alt="logo" /><p className='react-proj'>ReactND - Coding Practice</p>
            <h1 className="App-title">teamTALIMA</h1>
          </div>
        </div>
      </header>

      <TeamTalimaTeammates/>
    </div>
  );
}

export default App;
