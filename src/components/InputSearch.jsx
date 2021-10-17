import React from "react";

function InputSearch(props) {
  return (
    <article className="input-search">
      <span className="flex-center fas fa-search"></span>
      <input
        type="text"
        className="input"
        placeholder="Search or jump to..."
        onInput={props.input}
      />
      <style jsx>{`
        .input-search {
          width: 100%;
          max-width: 400px;
          border: 1px solid var(--black);
          border-radius: 20px;
          justify-content: start;
          align-items: center;
          display: flex;
        }
        .input {
          min-width: 280px;
          height: 40px;
          outline: none;
          border: none;
          background-color: transparent;
          padding-left: 8px;
          font-size: 1.8rem;
        }
        span {
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
