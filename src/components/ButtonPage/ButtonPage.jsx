import "./button.css";

import React from "react";

const ButtonPage = ({
  children,
  classSubmit = false,
  buttonSignUp = false,
}) => {
  return (
    <>
      <button className={`button ${classSubmit} ${buttonSignUp}`}>
        {children}
      </button>
    </>
  );
};

export default ButtonPage;
