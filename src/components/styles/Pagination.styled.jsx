import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 40px;
  button {
    text-decoration: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 20px;
    &:hover {
      color: #b8b8b8;
    }
  }
`;
