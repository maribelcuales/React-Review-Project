import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import GoalType from './GoalType.js';

//const cars = ['Ford', 'BMW', 'Audi'];

ReactDOM.render(
  //<App />, 
  //<Header favCol="yellow"/>,
  //<GarageCars cars={cars}/>,
  <GoalType isGoal={true} />,
  document.getElementById('root')
); 
