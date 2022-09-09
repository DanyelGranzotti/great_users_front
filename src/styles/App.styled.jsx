import styled from "styled-components";

// Styled Components - CSS in JS - https://styled-components.com/
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  * {
    box-sizing: border-box;
    font-family: Poppins;
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 30px 50px;
  align-items: center;
  justify-content: space-between;
  background-color: #f7f7f7;
  border-bottom: 1px solid #b8b8b8;

  div:first-child {
    width: 80vw;
    display: flex;
    justify-content: center;
    a {
      display: flex;
      width: fit-content;
    }
    img {
      width: 258px;
      height: 70px;
    }
  }

  div:last-child {
    a {
      display: flex;
      justify-content: center;
    }
    img {
      width: 205px;
      height: 49px;
    }
  }
`;
