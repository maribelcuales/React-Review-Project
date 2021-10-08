import { useState } from 'react';

function MyFormText() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute."
  );

  const handleInputChange = (event) => {
    setTextarea(event.target.value)
    // console.log(textarea);
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleInputChange} />
    </form>
  );
}

export default MyFormText;
