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
      let userRepoResponse = await fetch(`${api}/${userData.login}/repos`);
      let userRepository = await userRepoResponse.json();
      setUserInfo(userData);
      setUserRepo(userRepository);
    } else if (!userData.login) {
      setFound(3);
    }
  };

  const goHome = () => {
    setFound(1);
  };

  return (
    <section className="app-section">
      <Header action={goHome} />
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
          <section className="app-info__found">
            <article className="app-info__user">
              <UserStats
                image={userInfo.avatar_url}
                imageName={userInfo.login}
                name={userInfo.name}
                user={userInfo.login}
                bio={userInfo.bio}
              />
            </article>
            <section className="app-info__found__repo">
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
            </section>
          </section>
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
          margin-bottom: 12px;
        }
        .app-info {
          padding: 12px;
        }
        .app-info__found {
          display: grid;
        }
        .app-info__found__repo {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding-bottom: 12px;
          gap: 8px;
        }
        @media (min-width: 700px) {
          .app-info__found {
            grid-template-columns: 300px 1fr;
            grid-template-rows: 300px 1fr;
            justify-content: center;
          }
          .app-info__user {
            grid-column: 1;
            grid-row: 1;
            justify-self: center;
          }
        }
      `}</style>
    </section>
  );
}

export { App };
