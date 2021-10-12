// At first, you will notice a delay in execution when changing the count or adding a todo, because of a poor performing function  
// Solution -> wrap the expensive function call with useMemo 
// This way the function will only run when its dependencies have changed  

import { useState, useMemo } from 'react';

const AppCalculation = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  // wrap the expensive function call with useMemo 
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  }

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

// This was a poor performing function because it runs on every render 
// Solved! -> by wrapping the expensive function call with useMemo 
// This way the function will only run when its dependencies have changed  
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
}

export default AppCalculation; 