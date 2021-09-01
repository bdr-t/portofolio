import {
  Container,
  BackgroundDiv,
  Content,
  Grid,
  Flex,
  Text,
  SeeMoreBtn,
  TriangleBtn,
} from "./Projects.styles";
import { useState } from "react";
import sorting from "../../images/sorting-visualizer.png";
import planets from "../../images/planets.png";


const Projects = () => {
  const [width, setWidith] = useState("85%");

  window.onscroll = function (ev) {
    if (window.innerHeight > 700) {
    }
    if (window.innerHeight + window.pageYOffset >= window.innerHeight) {
      setWidith("100%");
    }
  };

  return (
    <Container width={width}>
      {!width === "100%" && <BackgroundDiv />}
      <Content>
        <h2>Projects</h2>
        <Grid width="100%" padding="1em">
          <Flex>
            <img src={planets} alt="" />
            <Text>
              
            <h3>Planets Facts</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh felis, finibus vel enim in, aliquet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh felis, finibus vel enim in, aliquet</p>
            </Text>
          </Flex>

          <Flex>
            <img src={sorting} alt="" />
            <Text>
              
            <h3>Sorting visualizer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh felis, finibus vel enim in, aliquet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh felis, finibus vel enim in, aliquet</p>
            </Text>
          </Flex>
        </Grid>
        <SeeMoreBtn>
          See more projects 
          <TriangleBtn/>
        </SeeMoreBtn>
      </Content>
    </Container>
  );
};

export default Projects;
