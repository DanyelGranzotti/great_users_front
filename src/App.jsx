import React, { useEffect, useState } from "react";
import api from "./services/api";

import * as Syled from "./styles/App.styled";

import SearchBar from "./components/ShearchBar";
import Table from "./components/Table";
import Pagination from "./components/Pagination";

function App() {
  const [userList, setUserList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [blankShearch, setBlankShearch] = useState(false);

  // Carrega a lista de usuário com base na página atual
  useEffect(() => {
    api
      .get("/user/?page=" + (page - 1) + "&size=10")
      .then((response) => {
        setUserList(response.data.content);
        setTotalPages(Math.ceil(response.data.totalElements / 10));
        setBlankShearch(false);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [page, blankShearch]);

  const onSearchNameHandler = (name) => {
    api
      .get("/user/name/" + name)
      .then((response) => {
        setUserList(response.data);
        setTotalPages(1);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("User not found", error);
      });
  };

  const onSearchCpfHandler = (cpf) => {
    api
      .get("/user/cpf/" + cpf)
      .then((response) => {
        setUserList([response.data]);
        setTotalPages(1);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("User not found", error);
      });
  };

  const onSearchRgHandler = (rg) => {
    api
      .get("/user/rg/" + rg)
      .then((response) => {
        setUserList([response.data]);
        setTotalPages(1);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("User not found", error);
      });
  };

  return (
    <Syled.Container>
      <Syled.Header>
        <div>
          <a href="">
            <img src="/img/UfcIcon.png" alt="UFC_Icon" />
          </a>
        </div>
        <div>
          <a href="">
            <img src="/img/GREatIcon.png" alt="GREat_Icon" />
          </a>
        </div>
      </Syled.Header>
      <SearchBar
        onSearchName={onSearchNameHandler}
        onSearchCpf={onSearchCpfHandler}
        onSearchRg={onSearchRgHandler}
        setBlank={setBlankShearch}
      />
      <Table userList={userList} />
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </Syled.Container>
  );
}

export default App;