import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import api from "../../services/api";

function User() {
  const userCpf = useParams().id;
  const [user, setUser] = useState({});
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    api
      .get("/user/cpf/" + userCpf)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log("User not found", error);
      });
  }, []);

  const handleDeleteTrue = (cpf) => {
    api
      .delete("/user/cpf/" + cpf)
      .then((response) => {
        setPopup(false);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("User not found", error);
      });
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Informações do usuário</h1>
      <p>Nome: {user.name}</p>
      <p>Data de nascimento: {user.birthDate}</p>
      <p>Nome da mãe: {user.motherName}</p>
      <p>Nome do pai: {user.fatherName}</p>
      <p>RG: {user.rg}</p>
      <p>CPF: {user.cpf}</p>
      <button onClick={() => setPopup(true)}>Deletar usuário</button>
      {popup ? (
        <span>
          <p>Tem certeza que deseja deletar o usuário?</p>
          <button onClick={() => handleDeleteTrue(user.cpf)}>Sim</button>
          <button onClick={() => setPopup(false)}>Não</button>
        </span>
      ) : null}
    </div>
  );
}

export default User;
