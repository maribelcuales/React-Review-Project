// Using React Context 
//To create context, import { createContext }
import { useState, createContext, useContext } from 'react';

// initialize createContext  
const UserContext = createContext(); 

function ComponentAll() {
  const [user, setUser] = useState("Luke and Lizzy");
  
  return (
    // Wrap child components in the Context Provider and supply the state value
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
} 

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  )
}

// In order to use the Context in a child component, import the { useContext } Hook  
function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>  
    </>
  );
}

export default ComponentAll;