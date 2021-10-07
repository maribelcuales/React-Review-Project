import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import GoalType from './GoalType.js';

ReactDOM.render(
  //<App />, 
  //<Header favCol="yellow"/>,
  <GoalType isGoal={true} />,
  document.getElementById('root')
); 
