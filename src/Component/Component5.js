// Using React Context 
// In order to use the Context in a child component, import the { useContext } Hook  

// useContext not able to retrieve the state of user in Component1 (it seems to work only if components are saved in a single file)

import { createContext, useContext } from 'react';

const UserContext = createContext();  

export default function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>  {/* user is undefined when rendered */}
    </>
  );
}

/*
export default function Component5({user}) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2> 
    </>
  );
}
*/
