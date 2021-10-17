import React from "react";

function Header(props) {
  return (
    <header>
      <figure onClick={props.action} className="header-logo">
        <img
          src="https://paulasaguz.github.io/PaulaHub/images/git.png"
          alt="header"
        />
      </figure>
      <a
        target="blank"
        href="https://github.com/admiralpxl/"
        className="header-name"
      >
        JuniorHub
      </a>
      <style jsx>{`
        header {
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: space-between;
          padding: 8px;
          border-bottom: 1px solid var(--black);
        }
        .header-logo {
          width: 35px;
          height: 35px;
        }
        .header-logo:hover {
          cursor: pointer;
        }
        .header-name {
          font-size: 2.4rem;
          font-weight: var(--bold);
          text-decoration: underline;
          color: var(--black);
        }
      `}</style>
    </header>
  );
}

export { Header };
