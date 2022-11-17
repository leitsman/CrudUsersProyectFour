import React from "react";
import ItemCards from "./ItemCards";

const Main = ({ Api, getDate, setActivateDelete }) => {
  // console.log(Api[0]);
  return (
    <main className="main">
      <div className="content--cards">
        {Api.map((element) => (
          <ItemCards
            key={element.id}
            element={element}
            getDate={getDate}
            setActivateDelete={setActivateDelete}
          />
        ))}
        {/* <div className="content--Card-user">
          <h2>Juan José Mosquera Gomez</h2>
          <div className="content--info-details">
            <b>EMAIL</b>
            <span>Miguel@gmail.com</span>
            <b>BIRTHDAY</b>
            <span>15-11-1994</span>
          </div>
          <hr />
          <div className="content--icon-title">
            <h3>options:</h3>
            <div className="content--icons-edits">
              <i className="fa-solid fa-pen-to-square fa-2x"></i>
              <i className="fa-solid fa-trash-can fa-2x"></i>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default Main;
