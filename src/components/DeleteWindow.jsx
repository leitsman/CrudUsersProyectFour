import React from "react";

const DeleteWindow = ({ setActivateDelete, eliminate }) => {
  return (
    <div className="content--form">
      <div className="content--data-form">
        <h2>Seguro que lo deseas eliminar</h2>
        <small>no te hagas a los capos eh...</small>
        <div className="content--button">
          <button onClick={() => eliminate()}>eliminar</button>
          <button onClick={() => setActivateDelete(null)}>cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteWindow;
