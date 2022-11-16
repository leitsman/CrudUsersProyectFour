import React from "react";

const Header = ({ setIterador, Iterador }) => {
  return (
    <div className="header">
      <h1>Usuarios</h1>
      <button
        className="header--button-create"
        onClick={() => setIterador(!Iterador)}
      >
        <span className="plusIcon">+ </span> Create new user
      </button>
    </div>
  );
};

export default Header;
