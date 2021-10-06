// To send props into a component: Add a "brand" attribute to the Car element
const myElement = <FaveCar brand="Mustang"/>;

function FaveCar(props) {
  return <h2>I am a {props.brand}!</h2>;
}

