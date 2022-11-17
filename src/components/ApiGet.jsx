import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteWindow from "./DeleteWindow";
import FormWindow from "./FormWindow";
import Header from "./Header";
import Main from "./Main";

const ApiGet = () => {
  // ==================  OPEN/CLOSE FORMULARIO ================
  const [Iterador, setIterador] = useState(false);
  // =============== precargador de api =============
  const PreGetApi = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setApi(res.data))
      .catch((error) => console.error(error.response.data));
  };
  // =============== OBTENER API/PRINT ==============
  const [Api, setApi] = useState([]);
  useEffect(() => {
    PreGetApi();
  }, []);
  // ===================== SELECCIONAR/ACTUALIZAR =========
  const [SelectItem, setSelectItem] = useState(null);
  const getDate = (selectData) => {
    setSelectItem(selectData);
  };
  // ==================== DELETE ITEM ================
  const [ActivateDelete, setActivateDelete] = useState(null);
  const eliminate = () => {
    if (ActivateDelete) {
      axios
        .delete(`https://users-crud1.herokuapp.com/users/${ActivateDelete}/`)
        .then((res) => PreGetApi())
        .catch((error) => console.error(error.response.data));
      setActivateDelete(null);
    }
  };
  return (
    <>
      <Header setIterador={setIterador} Iterador={Iterador} />
      <hr />
      <Main Api={Api} getDate={getDate} setActivateDelete={setActivateDelete} />
      {/* ======== FORMULARIO =========== */}
      <FormWindow
        Iterador={Iterador}
        setIterador={setIterador}
        PreGetApi={PreGetApi}
        SelectItem={SelectItem}
        setSelectItem={setSelectItem}
      />
      {ActivateDelete && (
        <DeleteWindow
          setActivateDelete={setActivateDelete}
          eliminate={eliminate}
        />
      )}
    </>
  );
};

export default ApiGet;
