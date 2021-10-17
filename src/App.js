import React from "react";
import { InputSearch } from "./components/InputSearch";
import { UserStats } from "./components/Userstats";
import { RepoCards } from "./components/RepoCards";
import { Header } from "./components/Header";
import { Principal } from "./components/Principal";

function App() {
  const api = "https://api.github.com/users";

  const [value, setValue] = React.useState("");
  const [userInfo, setUserInfo] = React.useState([]);
  const [userRepo, setUserRepo] = React.useState([]);
  const [found, setFound] = React.useState(1);

  const getInputValue = (event) => {
    setValue(event.target.value);
  };

  const fetchAPI = async (name) => {
    let userResponse = await fetch(`${api}/${name}`);
    let userData = await userResponse.json();

    if (userData.login) {
      setFound(2);
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
      setFound(3);
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
    <section className="app-section">
      <Header />
      <article className="app-search">
        <article className="app-search__input">
          <InputSearch input={getInputValue} />
        </article>
        <button
          className="app-search__button"
          onClick={() => {
            fetchAPI(value);
          }}
        >
          Search
        </button>
      </article>
      <section className="app-info">
        {found === 1 && (
          <Principal
            title="Start typing someone Github user's name."
            image="https://i.imgur.com/shzUqJo.png"
            imageAlt="Welcome"
          />
        )}

        {found === 2 && (
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
                bio={item.description ? item.description : "No description"}
                language={item.language ? item.language : "Others"}
                likes={item.stargazers_count}
                forks={item.forks}
              />
            ))}
          </>
        )}
        {found === 3 && (
          <Principal
            title="Sorry that user's name dont exist."
            image="https://i.imgur.com/QwfssOO.png"
            imageAlt="Not found"
          />
        )}
      </section>
      <style jsx>{`
        .app-section {
          display: grid;
        }
        .app-search {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 12px;
        }
        .app-search__input {
          width: 90%;
          margin-bottom: 8px;
        }
      `}</style>
    </section>
  );
}

export { App };
