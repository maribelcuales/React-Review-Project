import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
//import TodoApp from './Todos/TodoApp.js';
import FavoriteCar from './Car/FavoriteCar.js';

//const cars = ['Ford', 'BMW', 'Audi'];

ReactDOM.render(
  <FavoriteCar />,
  //<App />, 
  //<Header favCol="yellow"/>,
  //<GarageCars cars={cars}/>,
  //<GoalType isGoal={true} />,
  document.getElementById('root')
); 
