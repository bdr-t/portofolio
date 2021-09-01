import styled from "styled-components";
import { ContactBtn } from "../Nav/Nav.styles";
import {BsTriangleFill} from "react-icons/bs"

export const Container = styled.div`
  position: relative;
  min-height: 700px;
  width: ${(props) => props.width};
  background-color: black;
  margin: 0 auto;
  transition: 0.3s all;
  h2 {
    color: white;
    font-size: 50px;
    font-weight: 700;
    text-align: center;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

export const BackgroundDiv = styled.div`
  position: absolute;
  width: 100%;
  background: linear-gradient(180deg, #ff5858, #c058ff);
  transform: matrix(1, 0.04, -0.07, 1, 0, 0) scale(1);
  height: 100%;
  z-index: -1;
  border-radius: 10px;
`;

export const Grid = styled.div`
  display: grid;
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  grid-template-columns: 1fr 1fr;
  gap: 2em;
`;
export const Content = styled.div`
  padding: 3em;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  gap: 2em;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 0 3em;
  h3 {
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  p {
    font-size: 18px;
    color: rgba(107, 114, 128);
    line-height: 1.4;
    text-align: center;
  }
`;

export const SeeMoreBtn = styled(ContactBtn)`
  color: black;
  background-color: white;
  width: fit-content;
  place-self: center;
  display: flex;
  gap: 0.5em;
  place-content: center;
`;

export const TriangleBtn = styled(BsTriangleFill)`
  color: black;
  transform: rotate(180deg);
  align-self: center;
  width: 12px;
`