import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
//import TodoApp from './Todos/TodoApp.js';
import HomeFetch from './FetchJsonApi/HomeFetch.js';

//const cars = ['Ford', 'BMW', 'Audi'];

ReactDOM.render(
  <HomeFetch />,
  //<App />, 
  //<Header favCol="yellow"/>,
  //<GarageCars cars={cars}/>,
  //<GoalType isGoal={true} />,
  document.getElementById('root')
); 
