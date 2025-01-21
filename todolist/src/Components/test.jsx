import { useState } from "react";

export default function Test() {
  const [name, setName] = useState("Ange ett namn ovan...");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleNameChange} />
      <p>Name: {name}</p>
    </div>
  );
}
