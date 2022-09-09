import React from "react";

import * as Syled from "./styles/SearchBar.styled";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";

function SearchBar(props) {
  const { onSearchName, onSearchCpf, onSearchRg, setBlank } = props;

  // Captura o valor do input e chama a função de busca por nome
  const [name, setName] = React.useState("");
  const onChageNameHandler = (event) => {
    setName(event.target.value);
    if (event.target.value === "") {
      setBlank(true);
    }
  };
  const onButtonNameClickHandler = () => {
    onSearchName(name);
  };

  // Captura o valor do input e chama a função de busca por cpf
  const [cpf, setCpf] = React.useState("");
  const onChageCpfHandler = (event) => {
    setCpf(event.target.value);
    if (event.target.value === "") {
      setBlank(true);
    }
  };
  const onButtonCpfClickHandler = () => {
    onSearchCpf(cpf);
  };

  // Captura o valor do input e chama a função de busca por rg
  const [rg, setRg] = React.useState("");
  const onChageRgHandler = (event) => {
    setRg(event.target.value);
    if (event.target.value === "") {
      setBlank(true);
    }
  };
  const onButtonRgClickHandler = () => {
    onSearchRg(rg);
  };

  return (
    <Syled.Container>
      <Syled.Input>
        <input
          type="text"
          placeholder="Buscar pelo nome"
          onChange={onChageNameHandler}
        />
        <button
          type="button"
          onClick={onButtonNameClickHandler}
          data-testid="findByName"
        >
          <AiOutlineSearch />
        </button>
      </Syled.Input>
      <Syled.Input>
        <input
          type="text"
          placeholder="Buscar pelo CPF"
          onChange={onChageCpfHandler}
        />
        <button
          type="button"
          onClick={onButtonCpfClickHandler}
          data-testid="findByCpf"
        >
          <AiOutlineSearch />
        </button>
      </Syled.Input>
      <Syled.Input>
        <input
          type="text"
          placeholder="Buscar pelo RG"
          onChange={onChageRgHandler}
        />
        <button
          type="button"
          onClick={onButtonRgClickHandler}
          data-testid="findByRg"
        >
          <AiOutlineSearch />
        </button>
      </Syled.Input>

      <Syled.RegisterButton to="/register">
        <AiOutlinePlus />
        Cadastrar
      </Syled.RegisterButton>
    </Syled.Container>
  );
}

export default SearchBar;
