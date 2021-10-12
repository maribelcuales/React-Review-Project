import Component4 from "./Component4.js";

export default function Component3({user}) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user}/>
    </>
  );
}

