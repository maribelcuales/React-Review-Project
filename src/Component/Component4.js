import { useState, createContext, useContext } from 'react';
import Component5 from "./Component5.js";

// Using React Context 
export default function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  )
}

/*
export default function Component4({user}) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user}/>
    </>
  )
}
*/
