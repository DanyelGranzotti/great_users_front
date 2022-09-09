import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components - CSS in JS - https://styled-components.com/
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 50px;
`;

export const Table = styled.table`
  width: 100%;
  border: 1px solid #b8b8b8;
  border-collapse: collapse;
  font-size: 18px;
  thead {
    tr {
      th {
        height: 50px;
        text-align: left;
        padding: 10px 20px;
        color: #2c3a4f;
        border: 1px solid #b8b8b8;
      }
      th:first-child {
        width: 25%;
      }
      th:nth-child(2) {
        width: 20%;
      }
      th:nth-child(3) {
        width: 35%;
      }
      th:last-child {
        width: 20%;
      }
    }
  }
  tbody {
    background-color: #f0f3f4;
    tr {
      td {
        height: 50px;
        color: #b8b8b8;
        padding: 10px 20px;
        border: 1px solid #b8b8b8;
      }
    }
  }
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: #b8b8b8;
  &:hover {
    color: #2c3a4f;
  }
`;
