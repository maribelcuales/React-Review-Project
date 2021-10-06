function Car(props) {
  // return <h2>I am a {props.brand}!</h2>;
  return <h2>I am a {props.brand.model}!</h2>
}

function CarName() {
  //const carModel = "Ford";
  // Create a carInfo object 
  const carInfo = {
    name: "Ford",
    model: "Mustang"
  };
  return (
    <div>
      <h1>Who lives in my garage?</h1>
      <Car brand={carInfo} />
    </div>
  );
}

export default CarName;