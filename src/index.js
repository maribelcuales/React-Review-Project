import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
//import TodoApp from './Todos/TodoApp.js';
import AppRender from './App/AppRender.js';

//const cars = ['Ford', 'BMW', 'Audi'];

ReactDOM.render(
<AppRender />,
  //<App />, 
  //<Header favCol="yellow"/>,
  //<GarageCars cars={cars}/>,
  //<GoalType isGoal={true} />,
  document.getElementById('root')
); 
