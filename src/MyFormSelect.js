import { useState } from 'react';

function MyFormSelect() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleInputChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleInputChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  );
}

export default MyFormSelect;
