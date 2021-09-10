import BackgroundAnimation from "../../BackgroundAnimation";
import { Container, Content, ProjectsBtn, Section } from "./Hero.styles";
import { useState, useEffect } from "react";
import {useAnimation, motion} from 'framer-motion'

const Hero = ({ isInView }) => {

  const sectionAnimation = useAnimation()

  useEffect(()=>{
    if(isInView){
      sectionAnimation.start({
        backgroundColor: 'black',
        transition: {
          type:'tween',
          duration: 0.5,
        }
      })
    }

    if(!isInView){
      sectionAnimation.start({
        backgroundColor: 'white',
        transition: {
          type:'tween',
          duration: 0.5,
        }
      })

    }
    

  },[isInView])

  return (
    <Section as={motion.section} animation={sectionAnimation}>
      <Container >
        <Content>
          <h2>Hi! My name is <span> Bader </span> <br />
          </h2>
          <h3 >I'm a fullstack developer based in Barcelona, specializing in JavaScript and MERN stack</h3>
          <a href="#projects"><ProjectsBtn >View my work</ProjectsBtn></a>
          
        </Content>
        <div style={{display: 'grid', placeContent:'center'}}>
          <BackgroundAnimation />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
