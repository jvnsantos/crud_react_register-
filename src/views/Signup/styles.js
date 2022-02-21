import styled from "styled-components";
import { background } from "../../assets";
import { COLORS } from "../../styles/Theme";

export const Container = styled.div`
background-image: url("static/images/bg.jpg") ;
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
`;

export const Content = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    background-color: ${COLORS.cinza.claro};
    width: 50%;
    display: flex;
    flex-direction: column;

    label {
      color: ${COLORS.branco.default};
    }

    input {
      border: 1px solid black;
      outline: 0;
      width: 20em;
      height: 20px;
      margin-bottom: 0.5em;
    }

    button {
      margin: 2em 0;
      height: 25px;
      color: ${COLORS.branco.default};
      background-color: ${COLORS.cinza.escuro};

      :hover {
        cursor: pointer;
      }
    }
  }
`;
