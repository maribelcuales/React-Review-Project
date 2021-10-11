import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
//import TodoApp from './Todos/TodoApp.js';
import Component1 from './Component/Component1.js';

//const cars = ['Ford', 'BMW', 'Audi'];

ReactDOM.render(
  <Component1 />,
  //<App />, 
  //<Header favCol="yellow"/>,
  //<GarageCars cars={cars}/>,
  //<GoalType isGoal={true} />,
  document.getElementById('root')
); 
