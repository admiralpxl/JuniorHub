import React from "react";

function RepoCards(props) {
  return (
    <article className="repo-cards-info flex-column">
      <a
        className="repo-cards-info-title"
        href={props.url}
        rel="noreferrer"
        target="_blank"
      >
        {props.title}
      </a>
      <h3 className="repo-cards-info-bio">{props.bio}</h3>
      <article className="repo-cards-info-more">
        <div className="repo-cards-info-more__lenguage repo-mini-cards">
          <span className="fas fa-pencil-alt"></span>
          <p>{props.language}</p>
        </div>
        <div className="repo-cards-info-more__star repo-mini-cards">
          <span className="fas fa-heart"></span>
          <p>{props.likes}</p>
        </div>
        <div className="repo-cards-info-more__fork repo-mini-cards">
          <span className="fas fa-expand-arrows-alt"></span>
          <p>{props.forks}</p>
        </div>
      </article>
      <style jsx>{`
        .repo-cards-info {
          width: 100%;
          max-width: 400px;
          height: auto;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--gray-border);
        }
        .repo-cards-info-title {
          font-size: 2rem;
          font-weight: var(--bold);
          color: var(--blue);
          font-family: var(--sl-serif);
          transition: all 0.8s ease;
          margin-bottom: 8px;
        }
        .repo-cards-info-title:hover {
          text-decoration: underline;
        }
        .repo-cards-info-bio {
          font-size: 1.4rem;
          font-weight: var(--regular);
          line-height: 2.1rem;
          color: var(--black);
          margin-bottom: 12px;
        }
        .repo-cards-info-more {
          width: 100%;
          height: 25px;
          display: flex;
          justify-content: start;
        }
        .repo-mini-cards {
          display: flex;
          align-items: center;
          margin-left: 8px;
          font-weight: var(--light);
        }
        .repo-mini-cards p {
          margin-left: 8px;
        }
        .fa-pencil-alt {
          color: var(--green);
        }
        .fa-heart {
          color: #f91880;
        }
        .fa-expand-arrows-alt {
          color: var(--gray);
        }
      `}</style>
    </article>
  );
}

export { RepoCards };
