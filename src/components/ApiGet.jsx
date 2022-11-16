import axios from "axios";
import React, { useEffect, useState } from "react";
import FormWindow from "./FormWindow";
import Header from "./Header";
import Main from "./Main";

const ApiGet = () => {
  // ==================  OPEN/CLOSE FORMULARIO ================
  const [Iterador, setIterador] = useState(false);
  // =============== OBTENER API ==============
  const [Api, setApi] = useState([]);
  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setApi(res.data))
      .catch((error) => console.error(error.response.data));
  }, []);
  console.log(Api);
  return (
    <>
      <Header setIterador={setIterador} Iterador={Iterador} />
      <hr />
      <Main Api={Api} />
      {/* ======== FORMULARIO =========== */}
      <FormWindow Iterador={Iterador} setIterador={setIterador} />
    </>
  );
};

export default ApiGet;
