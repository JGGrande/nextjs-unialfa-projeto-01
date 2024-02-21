import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2vh 2vw;

  height: 12vh;

`;

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding-right: 3vw;
  gap: 2vw;

  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5vw;
    font-size: 2.8vh;
  }
  a:hover {
    color: blue;
    transition: 0.5s;
  }

`;