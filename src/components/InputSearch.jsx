import React from "react";

function InputSearch(props) {
  return (
    <>
      <input
        type="text"
        placeholder="The user you wanna know their repos"
        onInput={props.input}
      />
    </>
  );
}

export { InputSearch };
