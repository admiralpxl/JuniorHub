import React from "react";

function Header() {
  return (
    <header>
      <figure class="header-logo">
        <img
          src="https://paulasaguz.github.io/PaulaHub/images/git.png"
          alt="header"
        />
      </figure>
      <h2 className="header-name">JuniorHub</h2>
      <style jsx>{`
        header {
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: space-between;
          padding: 8px;
          border-bottom: 1px solid var(--black);
        }
        .header-log {
          width: 40px;
          height: 40px;
        }
        .header-name {
          font-size: 2.4rem;
          font-weight: var(--bold);
          text-decoration: underline;
        }
      `}</style>
    </header>
  );
}

export { Header };
