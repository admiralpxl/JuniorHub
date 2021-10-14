import React from "react";

function App() {
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
    <div>
      <h2>
        Hola como estas, ingresa el nombre del usuario de github que quieras
        saber
      </h2>
      <input type="text" />
      <button> Buscar </button>
    </div>
  );
}

export { App };
