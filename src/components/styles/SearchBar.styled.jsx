import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components - CSS in JS - https://styled-components.com/
export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 140px;
`;

export const Input = styled.div`
  width: 25%;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  display: flex;
  background-color: #ffffff;
  align-items: center;

  input {
    text-decoration: none;
    width: 90%;
    height: 100%;
    border: none;
    border-radius: 3px 0 0 3px;
    background: transparent;
    &:focus {
      outline: 1px solid #000;
    }
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
  }
  button {
    text-decoration: none;
    width: 10%;
    height: 100%;
    display: flex;
    font-size: 1.6rem;
    justify-content: center;
    align-items: center;
    background-color: #999999;
    border: none;
    border-radius: 0 3px 3px 0;
    &:hover {
      cursor: pointer;
      background-color: #666666;
    }
  }
`;

export const RegisterButton = styled(Link)`
  text-decoration: none;
  width: 15%;
  height: 45px;
  text-align: center;
  line-height: 45px;
  background-color: #ef6d1f;
  background: #ef6d1f;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #ffffff;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #d65a1a;
    color: #f8f8f8;
  }
`;
