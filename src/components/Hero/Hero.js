import BackgroundAnimation from "../../BackgroundAnimation";
import { Container, Content, ProjectsBtn, Section } from "./Hero.styles";
import { useState, useEffect } from "react";

const Hero = ({ change }) => {
  const [theme, setTheme] = useState(change ? 1 : 0);

  useEffect(() => {
    setTheme(change ? 1 : 0);
    console.log(change);
  }, [change]);

  return (
    <Section theme={theme}>
      <Container theme={theme}>
        <Content>
          <h1>LOREM LOREM </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nibh felis, finibus vel enim in, aliquet maximus leo. Etiam faucibus
            justo hendrerit, gravida nunc nec, fringilla augue. Pellentesque
            vehicula in mi vitae gravida. Proin aliquam malesuada malesuada.
            Nunc condimentum porta tellus, id facilisis ipsum porta eget.
            Pellentesque imperdiet lacinia enim id fringilla. Donec vestibulum
            massa dui, non congue ante eleifend non. Donec non elit placerat,
            dapibus turpis nec, maximus purus.
          </p>
          <ProjectsBtn theme={theme}>Projects</ProjectsBtn>
        </Content>
        <div>
          <BackgroundAnimation />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
