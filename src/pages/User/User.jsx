import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// Importa api
import api from "../../services/api";

import * as Styled from "./User.styled";
import { AiOutlineLeft } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";

import { cpfMask, dateMask, calcAge, rgMask } from "../../services/utils";

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
    <Styled.Container>
      <Styled.Content>
        <Styled.Header>
          <div>
            <Link to="/">
              <AiOutlineLeft />
            </Link>
          </div>
          <h1>Informações do usuário</h1>
        </Styled.Header>
        <Styled.Body>
          <hr />
          <Styled.Info>
            <div>
              <h2>Nome:</h2>
              <p>{user.name}</p>
            </div>
            <div>
              <div>
                <div>
                  <h2>Data de nascimento:</h2>
                  <p>{user.birthDate ? dateMask(user.birthDate) : ""}</p>
                </div>
                <div>
                  <h2>Idade:</h2>
                  <p>
                    {user.birthDate ? calcAge(user.birthDate) : "Não informado"}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2>Nome da mãe:</h2>
              <p>{user.motherName}</p>
            </div>
            <div>
              <h2>Nome do pai:</h2>
              <p>{user.fatherName}</p>
            </div>
            <div>
              <div>
                <div>
                  <h2>RG:</h2>
                  <p>{user.rg ? rgMask(user.rg) : "Não informado"}</p>
                </div>
                <div>
                  <h2>CPF:</h2>
                  <p>{user.cpf ? cpfMask(user.cpf) : ""}</p>
                </div>
              </div>
            </div>

            <Styled.DeleteButton onClick={() => setPopup(true)}>
              <FiTrash />
              Deletar usuário
            </Styled.DeleteButton>
          </Styled.Info>
        </Styled.Body>
      </Styled.Content>
      {popup ? (
        <Styled.Popup>
          <div>
            <p>Tem certeza que deseja deletar o usuário?</p>
            <button onClick={() => handleDeleteTrue(user.cpf)}>Sim</button>
            <button onClick={() => setPopup(false)}>Não</button>
          </div>
        </Styled.Popup>
      ) : null}
    </Styled.Container>
  );
}

export default User;
