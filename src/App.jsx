import React, { useEffect, useState } from "react";

// importa api
import api from "./services/api";

// importa utilidades
import { nameCase } from "./services/utils";

// importa componentes de estilo
import * as Syled from "./styles/App.styled";

// importa componentes
import SearchBar from "./components/ShearchBar";
import Table from "./components/Table";
import Pagination from "./components/Pagination";

function App() {
  const [userList, setUserList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [blankShearch, setBlankShearch] = useState(false);
  const [loading, setLoading] = useState(false);

  // Carrega a lista de usuário com base na página atual
  const catchUserList = async () => {
    try {
      setLoading(true);
      const response = await api
        .get("/user/?page=" + (page - 1) + "&size=10")
        .then((response) => {
          setUserList(response.data.content);
          setTotalPages(Math.ceil(response.data.totalElements / 10));
          setLoading(false);
        });
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    catchUserList();
  }, [page, blankShearch]);

  const onSearchNameHandler = (name) => {
    api
      .get("/user/name/" + nameCase(name))
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
      .get("/user/cpf/" + cpf.replace(/\D/g, ""))
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
      .get("/user/rg/" + rg.replace(/\D/g, ""))
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
      <Table userList={userList} loading={loading} />
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </Syled.Container>
  );
}

export default App;
