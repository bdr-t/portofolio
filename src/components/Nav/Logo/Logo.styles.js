import styled from "styled-components";

export const Container = styled.div`
  width: 42px;
  height: 42px;
  border: 3px solid black;
  background-color: transparent;
  display: grid;
  place-content: center;
  box-sizing: border-box;
`;

export const Text = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  /* background: linear-gradient(#250941, #EA0140);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  font-size: 18px;
  color: black;
  margin: 0;
`;
