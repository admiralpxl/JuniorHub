import React from "react";

function Principal(props) {
  return (
    <section className="principal flex-column center">
      <h2 className="principal-title">{props.title}</h2>
      <figure className="principal-image">
        <img src={props.image} alt={props.imageAlt} />
      </figure>
      <style jsx>{`
        .principal {
          width: 100%;
          height: auto;
          margin-top: 24px;
          text-align: center;
        }
        .principal-title {
          font-size: 2.8rem;
          font-weight: var(--bold);
          color: var(--black);
        }
        .principal-image {
          width: 320px;
          height: 320px;
        }
        @media (min-width: 600px) {
          .principal-image {
            width: 480px;
            height: 480px;
          }
        }
      `}</style>
    </section>
  );
}

export { Principal };
