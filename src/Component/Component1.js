//To create context, import { createContext }

import { useState, createContext } from 'react';
import Component2 from './Component2.js';

// initialize createContext  
// const UserContext = createContext(); 

export default function Component1() {
  const UserContext = createContext();

  const [user, setUser] = useState("Jesse Hall");
  
  return (
    // Wrap child components in the Context Provider and supply the state value
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

/*
import { useState } from 'react';
import Component2 from './Component2.js';

export default function Component1() {
  const [user, setUser] = useState("Jesse Hall");
  
  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}
*/