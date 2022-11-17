import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const valueInitial = {
  first_name: "",
  last_name: "",
  email: "",
  birthday: "",
  password: "",
};
const FormWindow = ({
  Iterador,
  setIterador,
  PreGetApi,
  SelectItem,
  setSelectItem,
}) => {
  // ==================== OBTENER EL DATO
  const { handleSubmit, register, reset } = useForm();
  const submit = (dateForm) => {
    if (SelectItem) {
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${dateForm.id}/`,
          dateForm
        )
        .then((res) => PreGetApi())
        .catch((error) => console.error(error.response.data));
    } else {
      axios
        .post("https://users-crud1.herokuapp.com/users/", dateForm)
        .then((res) => PreGetApi())
        .catch((error) => console.error(error.response.data));
      reset(valueInitial);
    }
  };
  // ======================= ACTUALIZAR DATOS ===================
  useEffect(() => {
    if (SelectItem) {
      reset(SelectItem);
      setIterador(!Iterador);
    } else {
      reset(valueInitial);
    }
  }, [SelectItem]);
  return (
    <div
      className={`content--form ${
        Iterador ? "open-content-form" : "close-content-form"
      }`}
      // onClick={() => setIterador(!Iterador)}
    >
      <div className="content--data-form">
        <i
          className="fa-solid fa-xmark fa-2x icon--exit-form"
          onClick={() => {
            setIterador(!Iterador);
            setSelectItem(null);
          }}
        ></i>
        <h2>{SelectItem ? "Editar usuario" : "Nuevo Usuario"}</h2>
        <form
          action=""
          className="content--input-form"
          onSubmit={handleSubmit(submit)}
        >
          <label htmlFor="first_name">Name</label>
          <input type="text" id="first_name" {...register("first_name")} />
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" {...register("last_name")} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          <label htmlFor="birthday">birthday</label>
          <input type="date" id="birthday" {...register("birthday")} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
          <button onClick={() => setIterador(!Iterador)}>
            {SelectItem ? "Editar usuario" : "Agregar usuario"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormWindow;
