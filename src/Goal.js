function Goal() {
  const shoot = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function, in this case the 'click' event
    */
  }

  return (
    <button onClick = {(event) => shoot("It's a Goal!", event)}> Take the Shot!</button>
  );
}

export default Goal;