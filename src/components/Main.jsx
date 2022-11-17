import React from "react";
import ItemCards from "./ItemCards";

const Main = ({ Api, getDate, setActivateDelete }) => {
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
      </div>
    </main>
  );
};

export default Main;
