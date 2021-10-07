import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import GarageCars from './GarageCars.js';

const cars = ['Ford', 'BMW', 'Audi'];

ReactDOM.render(
  //<App />, 
  //<Header favCol="yellow"/>,
  // <GoalType isGoal={true} />,
  <GarageCars cars={cars}/>,
  document.getElementById('root')
); 
