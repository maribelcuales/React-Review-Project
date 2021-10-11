import { useState, createContext, useContext } from 'react';
import Component3 from "./Component3.js";

// Using React Context 
export default function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
} 

/*
export default function Component2({user}) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user}/>
    </>
  );
} 
*/

