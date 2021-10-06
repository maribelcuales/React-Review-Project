function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

function CarName() {
  const carModel = "Ford";
  return (
    <div>
      <h1>Who lives in my garage?</h1>
      <Car brand={carModel} />
    </div>
  );
}

export default CarName;