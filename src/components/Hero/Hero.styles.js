import styled from "styled-components";
import {ContactBtn} from '../Nav/Nav.styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8em;
  height: 500px;
  width: 75%;
  margin: 80px 0;
  place-self: center;
  margin-top: 100px;
  h2{
    font-size: 52px;
  }
  h3{
    font-size: 24px;
    line-height: 160%;
  }
  p{
    color: ${({theme})=> theme === 1 ? 'white' : 'black'}
  }
  transition: 1s all;
  font-family: "Poppins", sans-serif;
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
    font-size: 112px;
    font-weight: 700;
    background: linear-gradient(to right,#680641,#BC0341, #ea0140);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span{
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
    color: ${({theme})=> theme === 1 ? 'black' : 'white'};
    background-color: ${({theme})=> theme === 1 ? 'white': 'black'};
`

export const Section = styled.section`
  width: 100%;
  display: grid;
  place-content: center;
  background-color: ${({theme})=> theme === 1 ? 'black' : ''};
  /* background: ${({theme})=> theme === 1 ? '' : 'linear-gradient(180deg, rgb(188,234,246)0%, rgba(255,255,255,1) 100%)'}; */
  margin-bottom: 35px;
  margin-top: 35px;
  height: 600px;
`