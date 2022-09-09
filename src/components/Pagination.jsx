import React from "react";

import * as Syled from "./styles/Pagination.styled";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = (props) => {
  const { page, totalPages, setPage } = props;

  const onLeftClickHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const onRightClickHandler = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <Syled.Container>
      <button onClick={onLeftClickHandler}>
        <AiOutlineLeft />
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClickHandler}>
        <AiOutlineRight />
      </button>
    </Syled.Container>
  );
};

export default Pagination;
