import React from "react";

import * as Syled from "./styles/Table.styled";

function Table(props) {
  return (
    <Syled.Container>
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
          {props.userList.map((user) => (
            <tr key={user.id}>
              <td>
                <Syled.LinkButton to={`/user/${user.cpf}`}>
                  {user.name}
                </Syled.LinkButton>
              </td>
              <td>{user.birthDate}</td>
              <td>{user.cpf}</td>
              <td>{user.registrationDate}</td>
            </tr>
          ))}
        </tbody>
      </Syled.Table>
    </Syled.Container>
  );
}

export default Table;
