import React from "react";
import { InputSearch } from "./components/InputSearch";

function App() {
  const [value, setValue] = React.useState("");
  const [userInfo, setUserInfo] = React.useState([]);

  const getInputValue = (event) => {
    setValue(event.target.value);
  };

  /*const [equipos, setEquipos] = React.useState([]);

  const obtenerDatos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setEquipos(data);
    console.log(equipos);
  };

  React.useEffect(() => {
    obtenerDatos();
  }, []);*/

  return (
    <section>
      <h2>
        Hola como estas, ingresa el nombre del usuario de github que quieras
        saber
      </h2>
      <InputSearch input={getInputValue} />
      <button
        onClick={() => {
          console.log(value);
        }}
      >
        Search
      </button>
    </section>
  );
}

export { App };
