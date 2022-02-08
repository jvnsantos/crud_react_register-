import styled from "styled-components";
import { COLORS } from "../../styles/Theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${COLORS.cinza.claro};
  width: fit-content;


  form {
    display: flex;
    flex-direction: column;
    margin: 20px;

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

      :hover{
          cursor: pointer;
      }
    }
  }
`;
