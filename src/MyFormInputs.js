import { useState } from 'react';

function MyFormInputs() {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value})) 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleInputChange}
        />
      </label>
      <label>Enter your age: 
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleInputChange} 
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default MyFormInputs; 
