import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2vh 2vw;

`;

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding-right: 3vw;

  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

`;