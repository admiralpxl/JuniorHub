import React from "react";

function UserStats(props) {
  return (
    <article className="user-stats center padding">
      <figure class="figure">
        <img src={props.image} alt={props.imageName} />
      </figure>
      <div className="user-stats-info">
        <h2 className="user-stats-name">{props.name}</h2>
        <h3 className="user-stats-users">@{props.user}</h3>
      </div>
      <p className="user-stats-bio">{props.bio}</p>
      <style jsx>{`
        .user-stats {
          display: grid;
          grid-gap: 8px;
          border-bottom: 1px solid var(--black);
        }
        .figure {
          width: 250px;
          height: 250px;
          margin: auto;
        }
        img {
          border-radius: 50%;
        }
        .user-stats-info {
          width: 100%;
          margin-bottom: 8px;
          text-align: center;
        }
        .user-stats-name {
          font-family: var(--sl-serif);
          font-size: 2.6rem;
          margin-bottom: 4px;
        }
        .user-stats-users {
          font-size: 2rem;
          font-weight: var(--light);
        }
        .user-stats-bio {
          font-size: 1.6rem;
          line-height: 2.2rem;
          font-weight: var(--regular);
          max-width: 400px;
          text-align: center;
        }
      `}</style>
    </article>
  );
}

export { UserStats };
