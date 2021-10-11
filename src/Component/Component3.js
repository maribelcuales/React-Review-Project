import { useState, createContext, useContext } from 'react';
import Component4 from "./Component4.js";

// Using React Context 
export default function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

/*
export default function Component3({user}) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user}/>
    </>
  );
}
*/
