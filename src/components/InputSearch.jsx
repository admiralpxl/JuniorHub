import React from "react";

function InputSearch(props) {
  return (
    <article className="input-search">
      <span className="flex-center fas fa-search span"></span>
      <input
        type="text"
        className="input"
        placeholder="Search or jump to..."
        onInput={props.input}
      />
      <style jsx>{`
        .input-search {
          width: 100%;
          border: 1px solid var(--black);
          border-radius: 20px;
          justify-content: start;
          align-items: center;
          display: flex;
        }
        .input {
          width: 100%;
          height: 40px;
          outline: none;
          border: none;
          background-color: transparent;
          padding-left: 8px;
          font-size: 1.8rem;
        }
        .input-search:hover {
          border: 2px solid var(--blue);
        }
        .span {
          max-width: 30px;
          color: var(--black);
          margin-left: 16px;
        }
        ::placeholder {
          font-size: 1.8rem;
          font-weight: var(--light);
        }
      `}</style>
    </article>
  );
}

export { InputSearch };
