import React from "react";

const FormWindow = ({ Iterador, setIterador }) => {
  return (
    <div
      className={`content--form ${
        Iterador ? "open-content-form" : "close-content-form"
      }`}
      onClick={() => setIterador(!Iterador)}
    >
      <div className="content--data-form">
        <i
          className="fa-solid fa-xmark fa-2x icon--exit-form"
          onClick={() => setIterador(!Iterador)}
        ></i>
        <h2>Nuevo usuario</h2>
        <form action="" className="content--input-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="birthday">birthday</label>
          <input type="date" id="birthday" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button>Agregar nuevo usuario</button>
        </form>
      </div>
    </div>
  );
};

export default FormWindow;
