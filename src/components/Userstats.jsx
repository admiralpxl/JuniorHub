import React from "react";

function UserStats(props) {
  return (
    <article className="user-stats center padding">
      <figure>
        <img src={props.image} alt={props.imageName} />
      </figure>
      <div>
        <h2>{props.name}</h2>
        <h3>@{props.user}</h3>
      </div>
      <p>{props.bio}</p>
      <style jsx>{`
        .user-stats {
          display: grid;
          grid-gap: 8px;
          border-bottom: 1px solid var(--gray-border);
          max-width: 400px;
        }
        figure {
          width: 250px;
          height: 250px;
          margin: auto;
        }
        img {
          border-radius: 50%;
        }
        div {
          width: 100%;
          margin-bottom: 8px;
          text-align: center;
        }
        h2 {
          font-family: var(--sl-serif);
          font-size: 2.6rem;
          margin-bottom: 4px;
        }
        h3 {
          font-size: 2rem;
          font-weight: var(--light);
        }
        p {
          font-size: 1.6rem;
          line-height: 2.2rem;
          font-weight: var(--regular);
          max-width: 400px;
        }
      `}</style>
    </article>
  );
}

export { UserStats };
