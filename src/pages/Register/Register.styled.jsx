import styled from "styled-components";
import { Link } from "react-router-dom";
import { Field } from "formik";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;

  background-color: #f7f7f7;
  * {
    box-sizing: border-box;
    font-family: Poppins;
  }
`;

export const Content = styled.div`
  width: 40%;
  margin: 0;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  height: 150px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    line-height: 47px;
  }
`;

export const ContentForm = styled.div`
  display: flex;
  min-width: 100%;
`;

export const ContentRowLabels = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  div {
    width: 100%;
  }
  label {
    display: block;
    margin-bottom: 5px;
    color: var(--textColor500);
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ContentButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: right;
  margin-top: 30px;
  div {
    width: 100%;
  }
  label {
    display: block;
    margin-bottom: 5px;
    color: var(--textColor500);
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ContentField = styled(Field)`
  min-width: 100%;
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  transition: 0.3s;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ErrorMessages = styled.div`
  color: red;
  font-size: 12px;
  margin-left: 5px;
  margin-bottom: 10px;
`;

export const HalfContentField = styled(Field)`
  width: 100%;
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  transition: 0.3s;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const GoBackButton = styled(Link)`
  min-width: 10rem;
  text-decoration: none;
  border: none;
  width: 15%;
  height: 45px;
  text-align: center;
  line-height: 45px;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #ef6d1f;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #e0e0e0;
    color: #d65a1a;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    min-width: 30%;
  }
`;

export const RegisterButtonContainer = styled.button`
  min-width: 10rem;
  text-decoration: none;
  border: none;
  width: 15%;
  height: 45px;
  text-align: center;
  line-height: 45px;
  background-color: #ef6d1f;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #ffffff;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  &:hover {
    background-color: #d65a1a;
    color: #f8f8f8;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    min-width: 30%;
  }
`;

export const ImageContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  margin-left: 10%;
  img {
    width: 419px;
    height: 419px;
    margin-top: 150px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Popup = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    width: 50%;
    height: 40%;
    border: 1px solid #000;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  p {
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    line-height: 47px;
    margin: 0 35px;
    color: #d65a1a;
  }
  @media (max-width: 768px) {
    margin-bottom: 50px;
    font-size: 1rem;
    div {
      width: 90%;
      height: 60%;
    }
  }
`;
