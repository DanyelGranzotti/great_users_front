import React, { useEffect, useState } from "react";

import * as Syled from "./styles/Table.styled";
import { CircularProgress } from "@mui/material";

import { cpfMask, dateMask } from "../services/utils";

function Table(props) {
  const { userList, loading } = props;
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
    });
  };

  return (
    <Syled.Container>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {windowDimenion.winWidth > 768 ? (
            <Syled.Table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Data de nasimento</th>
                  <th>CPF</th>
                  <th>Data de registro</th>
                </tr>
              </thead>
              <tbody>
                {props.userList && props.userList.length > 0 ? (
                  props.userList.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <Syled.LinkButton to={`/user/${user.cpf}`}>
                          {user.name}
                        </Syled.LinkButton>
                      </td>
                      <td>{dateMask(user.birthDate)}</td>
                      <td>{cpfMask(user.cpf)}</td>
                      <td>{dateMask(user.registrationDate)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">Nenhum usuário encontrado</td>
                  </tr>
                )}
              </tbody>
            </Syled.Table>
          ) : (
            <Syled.Table>
              <thead>
                <tr>
                  <th>Nome</th>

                  <th>CPF</th>
                </tr>
              </thead>
              <tbody>
                {props.userList.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <Syled.LinkButton to={`/user/${user.cpf}`}>
                        {user.name}
                      </Syled.LinkButton>
                    </td>
                    <td>{cpfMask(user.cpf)}</td>
                  </tr>
                ))}
              </tbody>
            </Syled.Table>
          )}
        </>
      )}
    </Syled.Container>
  );
}

export default Table;
