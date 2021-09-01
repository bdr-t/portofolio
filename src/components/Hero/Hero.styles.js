import styled from "styled-components";
import {ContactBtn} from '../Nav/Nav.styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8em;
  height: 500px;
  width: 75%;
  margin: 80px auto;
  background-color: ${(props)=> props.background};
`;

export const AnimationContent = styled.div`
display: grid;
  place-content: center;
`

export const Content = styled.div`
  display:flex;
  flex-direction: column;
  place-content: center;
  gap: 2em;

  h1 {
    font-size: 50px;
    font-weight: 700;
    background: linear-gradient(to right,#680641,#BC0341, #ea0140);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    line-height: 160%;
  }
`;

export const ProjectsBtn = styled(ContactBtn)`
    width: fit-content;
`
