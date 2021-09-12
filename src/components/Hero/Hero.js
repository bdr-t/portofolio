import BackgroundAnimation from "../../BackgroundAnimation";
import {
  Container,
  Content,
  ProjectsBtn,
  Section,
  Blur,
  BtnBlurDiv,
  AnimationDiv,
} from "./Hero.styles";
import { Link } from "react-scroll";

const Hero = () => {

  return (
    <Section id="hero">
      <Container>
        <Content>
          <h2>
            Hi! My name is <span> Bader </span> <br />
          </h2>
          <h3>
            I'm a fullstack developer based in Barcelona, specializing in
            JavaScript and MERN stack
          </h3>
          <BtnBlurDiv>
            <Blur></Blur>
            <Link to="projects" smooth={true} duration={1000}  offset={-120}> <ProjectsBtn>View my work</ProjectsBtn></Link> 
            
          </BtnBlurDiv>
        </Content>
        <AnimationDiv>
          <BackgroundAnimation />
        </AnimationDiv>
      </Container>
    </Section>
  );
};

export default Hero;
