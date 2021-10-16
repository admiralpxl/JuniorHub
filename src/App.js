import React from "react";
import { InputSearch } from "./components/InputSearch";

function App() {
  const api = "https://api.github.com/users";

  const [value, setValue] = React.useState("");
  const [userInfo, setUserInfo] = React.useState([]);
  const [userRepo, setUserRepo] = React.useState([]);

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
*/

  const fetchAPI = async (name) => {
    let userResponse = await fetch(`${api}/${name}`);
    let userData = await userResponse.json();

    if (userData.login) {
      console.log(userData);
      let userRepoResponse = await fetch(`${api}/${userData.login}/repos`);
      let userRepository = await userRepoResponse.json();
      setUserInfo(userData);
      setUserRepo(userRepository);

      console.log("Usuario encontrado");
    } else if (!userData.login) {
      console.log(userData);
      console.log("usuario no encontrado");
    }
  };

  return (
    <section>
      <h2>
        Hola como estas, ingresa el nombre del usuario de github que quieras
        saber
      </h2>
      <InputSearch input={getInputValue} />
      <button
        onClick={() => {
          fetchAPI(value);
        }}
      >
        Search
      </button>
      <h2>
        {userInfo.login} + {userInfo.name}
      </h2>
      <ul>
        {userRepo.map((item) => (
          <li key={item.id}>
            {item.name} + {item.size}
          </li>
        ))}
      </ul>
    </section>
  );
}

export { App };
