import React from "react";
import { InputSearch } from "./components/InputSearch";
import { UserStats } from "./components/Userstats";
import { RepoCards } from "./components/RepoCards";

function App() {
  const api = "https://api.github.com/users";

  const [value, setValue] = React.useState("");
  const [userInfo, setUserInfo] = React.useState([]);
  const [userRepo, setUserRepo] = React.useState([]);
  const [found, setFound] = React.useState(false);

  const getInputValue = (event) => {
    setValue(event.target.value);
  };

  const fetchAPI = async (name) => {
    let userResponse = await fetch(`${api}/${name}`);
    let userData = await userResponse.json();

    if (userData.login) {
      setFound(true);
      console.log(userData);
      let userRepoResponse = await fetch(`${api}/${userData.login}/repos`);
      let userRepository = await userRepoResponse.json();
      setUserInfo(userData);
      setUserRepo(userRepository);
      console.log(userRepository);
      /* console.log(
        Intl.DateTimeFormat("en-US").format(userRepository.updated_at)
      );*/
      console.log(found);
      console.log("Usuario encontrado");
    } else if (!userData.login) {
      console.log("usuario no encontrado");
      console.log(found);
    }
  };

  /*
  <h2>
        {userInfo.login} + {userInfo.name} + {userInfo.avatar_url} +{" "}
        {userInfo.bio} + {userInfo.followers} + {userInfo.following} +{" "}
        {userInfo.company} + {userInfo.location} + {userInfo.email} +{" "}
        {userInfo.blog} + {userInfo.public_repos} + {userInfo.twitter_username}
      </h2>
      <ul>
        {userRepo.map((item) => (
          <li key={item.id}>
            {item.name} + {item.description} +{item.language} + {item.forks} +
            {item.stargazers_count} + {item.visibility} + {item.default_branch}
          </li>
        ))}
      </ul>*/

  return (
    <section>
      <InputSearch input={getInputValue} />
      <button
        onClick={() => {
          fetchAPI(value);
        }}
      >
        Search
      </button>
      {!!found && (
        <>
          <UserStats
            image={userInfo.avatar_url}
            imageName={userInfo.login}
            name={userInfo.name}
            user={userInfo.login}
            bio={userInfo.bio}
          />
          {userRepo.map((item) => (
            <RepoCards
              key={item.id}
              title={item.name}
              url={item.html_url}
              bio={item.description ? item.description : "No have description"}
              language={item.language ? item.language : "Others"}
              likes={item.stargazers_count}
              forks={item.forks}
            />
          ))}
        </>
      )}
    </section>
  );
}

export { App };
