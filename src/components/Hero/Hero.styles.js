import styled from "styled-components";
import { ContactBtn } from "../Nav/Nav.styles";
import gradient from "../../images/gradient.svg";
import gradient2 from "../../images/gradient2.svg";
import gradient3 from "../../images/gradient3.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8em;
  height: 500px;
  width: 75%;
  margin: 80px 0;
  place-self: center;
  margin-top: 100px;
  h2 {
    font-size: 52px;
    font-weight: 500;
  }
  h3 {
    font-size: 24px;
    line-height: 160%;
  }
  p {
    color: white;
  }

  transition: 1s all;
  font-family: "Poppins", sans-serif;
  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
  }
`;

export const AnimationContent = styled.div`
  display: grid;
  place-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  gap: 2em;

  span {
    font-weight: 700;
    background: linear-gradient(to right, #680641, #bc0341, #ea0140);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    line-height: 160%;
  }
`;

export const ProjectsBtn = styled(ContactBtn)`
  width: fit-content;
  color: white;
  background-color: black;
  position: relative;
  color: white;
  background-color: black;
`;

export const Section = styled.section`
  width: 100%;
  display: grid;
  place-content: center;
  background-color: inherit;
  padding: 35px 0;
  height: 80vh;
  background-image: url(${gradient}), url(${gradient2}), url(${gradient3});
  background-position: 110% -100px, 80% -100px, 150% -200px;
  background-repeat: no-repeat;
  background-size: 700px;
  @media (max-width: 1020px) {
    background-position: 250px -100px, 100px -100px, 350px -200px;
  }

  @media (max-width: 800px) {
    background-position: 200px -100px, 50px -100px, 250px -200px;
  }
  @media (max-width: 426px) {
    padding: 100px 0;
  }

  @media (max-width: 359px) {
    padding: 120px 0;
  }

`;

export const Blur = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  position: absolute;
  inset: 10px;
  -webkit-filter: blur(8px);
  background: linear-gradient(to right, #ea0140, #bc0341, #680641);
`;

export const BtnBlurDiv = styled.div`
  position: relative;
  width: fit-content;
`;


export const AnimationDiv = styled.div`
display: grid;
place-content: center;
@media (max-width: 1020px) {
    display: none;
  }
`