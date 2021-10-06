function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

function Garage() {
  return (
    <div>
      <h1>Who lives in my garage?</h1>
      <Car brand="Mustang" />
    </div>
  );
}

export default Garage;