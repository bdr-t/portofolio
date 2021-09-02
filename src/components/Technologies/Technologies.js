import {
  Container,
  Flex,
  IconContainer,
} from "./Technologies.styles";
import { FaReact, FaGithub } from "react-icons/fa";
import {SiMongodb, SiPostman, SiCss3, SiSocketDotIo, SiRabbitmq, SiRedux, SiTailwindcss, SiTypescript, SiVisualstudiocode, SiJavascript, SiHtml5, SiNodeDotJs} from "react-icons/si"
import {BsBootstrapFill} from "react-icons/bs"
import express from '../../images/express.png'
import figma from '../../images/figma.png'
import python from '../../images/python.png'
import postgres from '../../images/postgres.png'


const Technologies = () => {
  return (
    <Container>
      <h2>Technologies</h2>
      <Flex>
        <IconContainer>
          <FaReact color="#61DAFB" size="50" />
        </IconContainer>
        <IconContainer>
          <SiRedux color="#764ABC" size="50" />
        </IconContainer>
        <IconContainer>
          <BsBootstrapFill color="#7952B3" size="50" />
        </IconContainer>
        <IconContainer>
          <SiTailwindcss color="#06B6D4" size="50" />
        </IconContainer>
        <IconContainer>
          <FaGithub color="#24292F" size="50" />
        </IconContainer>
        <IconContainer>
          <SiTypescript color="#3178C6" size="50" />
        </IconContainer>
        <IconContainer>
          <SiVisualstudiocode color="#23A7F2" size="50" />
        </IconContainer>
        <IconContainer>
          <SiJavascript color="#FCDC00" size="50" />
        </IconContainer>
        <IconContainer>
          <SiHtml5 color="#FF8129" size="50" />
        </IconContainer>
        <IconContainer>
          <SiNodeDotJs color="#78B460" size="50" />
        </IconContainer>
        <IconContainer>
            <img src={express} alt="" />
        </IconContainer>
        <IconContainer>
          <SiRabbitmq color="#FF6600" size="50" />
        </IconContainer>
        <IconContainer>
          <SiSocketDotIo color="black" size="50" />
        </IconContainer>
        <IconContainer>
          <SiCss3 color="#3595CF" size="50" />
        </IconContainer>
        <IconContainer>
          <SiPostman color="#FF6C37" size="50" />
        </IconContainer>
        <IconContainer>
          <SiMongodb color="#13AA52" size="50" />
        </IconContainer>
        <IconContainer>
            <img src={postgres} alt="" />
        </IconContainer>
        <IconContainer>
            <img src={python} alt="" />
        </IconContainer>
        <IconContainer>
            <img src={figma} alt="" />
        </IconContainer>
      </Flex>
    </Container>
  );
};

export default Technologies;
