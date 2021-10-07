function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <div>
      <h1>Who lives in my garage?</h1>
      {/* <Car brand="Mustang" /> */}
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </div>
  );
}

export default Garage;