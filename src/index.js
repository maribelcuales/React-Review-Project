import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
//import TodoApp from './Todos/TodoApp.js';
import CarObject from './Car/CarObject.js';

//const cars = ['Ford', 'BMW', 'Audi'];

ReactDOM.render(
  <CarObject />,
  //<App />, 
  //<Header favCol="yellow"/>,
  //<GarageCars cars={cars}/>,
  //<GoalType isGoal={true} />,
  document.getElementById('root')
); 
