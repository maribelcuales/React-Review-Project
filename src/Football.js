function Football() {
  //const shoot = () => {
  //  alert("Great Shot!");

  const shoot = (a) => {
    alert(a);
  }

  return (
    //<button onClick={shoot}>Take the shot!</button>
    
    // send "Goal!" as a parameter to the shoot function  
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

export default Football;