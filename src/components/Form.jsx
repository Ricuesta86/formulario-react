import { useState } from "react";
export default function Form() {
  const initState = {
    input: ""
  };
  const [inputState, setInputState] = useState(initState);

  const handleChange = (event) => {
    // return
    setInputState({
      input: "Hola"
    });
  };
  return (
    <>
      <form>
        <h1>Formulario</h1>
        <input
          type="text"
          name="input"
          onChange={handleChange}
          value={inputState.input}
        />
      </form>
    </>
  );
}
