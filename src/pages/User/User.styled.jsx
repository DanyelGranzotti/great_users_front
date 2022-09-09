import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f7f7f7;
  color: #4f4f4f;
  * {
    box-sizing: border-box;
    font-family: Poppins;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;

  padding: 0 100px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.2px solid #000;
    border-radius: 5px;
    &:hover {
      border: 1.2px solid #7f7f7f;
    }
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000;
    width: 30px;
    height: 30px;
    font-size: 25px;
    font-weight: 600;
    line-height: 47px;
    &:hover {
      color: #7f7f7f;
    }
  }
  h1 {
    font-size: 30px;
    font-weight: 600;
    line-height: 47px;
    margin: 0;
    margin-left: 10px;
  }
  @media (max-width: 768px) {
    padding: 0 40px;
    h1 {
      font-size: 20px;
    }
  }
`;

export const Body = styled.div`
  width: 100%;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  hr {
    width: 100%;
    border: 1px solid #000;
  }
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Info = styled.div`
  width: 80%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
    div { 
        width: 100%;
        display: flex;
        flex-direction: column;
   
        div {
            display: flex;
            flex-direction: row;
            div {
            width: 50%;
            display: flex;
            flex-direction: column;
            }
        }
    }
    h2 {
        font-size: 20px;
        font-weight: 600;
        line-height: 47px;
        margin: 0 35px;
        color: #4f4f4f;
    }
    p {
        border: 0.6px solid rgba(0, 0, 0, 0.12);
        border-radius: 3px;
        padding: 10px;
        margin: 0 30px;
        font-size: 20px;
        line-height: 47px;
        color: #666666;
        background-color: #fff;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    div {
        div {
            div {
                width: 100%;
            }
        }
    }
    h2 {
        margin: 0 10px;
        font-size: 0.8rem;
        height: 3rem;
    }
    p {
        font-size: 15px;
        margin: 0 10px;
    }
  }
`;

export const DeleteButton = styled.button`
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
  margin-top: 50px;
  svg {
    margin-right: 10px;
  }
  &:hover {
    background-color: #d65a1a;
    color: #f8f8f8;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    min-width: 70%;
    margin-left: 0;
    margin-bottom: 50px;
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
  button:first-child {
    margin-right: 20px;
    background-color: #ef6d1f;
  }
  button:last-child {
    background-color: #4f4f4f;
  }
  button {
    min-width: 10rem;
    text-decoration: none;
    border: none;
    width: 15%;
    height: 45px;
    text-align: center;
    line-height: 45px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #ffffff;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    &:hover {
      background-color: #d65a1a;
      color: #f8f8f8;
      cursor: pointer;
    }
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
