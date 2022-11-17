import React from "react";

const ItemCards = ({ element, getDate, setActivateDelete }) => {
  return (
    <div className="content--Card-user">
      <h2>
        {element.first_name} {element.last_name}
      </h2>
      <div className="content--info-details">
        <b>EMAIL</b>
        <span>{element.email}</span>
        <b>BIRTHDAY</b>
        <span>{element.birthday}</span>
      </div>
      <hr />
      <div className="content--icon-title">
        <h3>options:</h3>
        <div className="content--icons-edits">
          <i
            className="fa-solid fa-pen-to-square fa-2x"
            onClick={() => getDate(element)}
          ></i>
          <i
            className="fa-solid fa-trash-can fa-2x"
            onClick={() => setActivateDelete(element.id)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ItemCards;
