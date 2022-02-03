import styled from "styled-components";

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("static/images/bg@3x.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const COLORS = {
  branco: {
    default: "#ffffff",
    offWhite: "#fff22",
  },
  cinza: {
    claro: "#303134",
    escuro: "#202124",
  },
};
