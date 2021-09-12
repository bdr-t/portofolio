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
import minimalReddit from "../../images/minimalReddit.png";
import memories from "../../images/memories.png";
import twitch from "../../images/twitch.png";
import spotify from "../../images/spotify.png";

const Projects = ({ changeTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "relative" }} id="projects">
      <BackgroundDiv/>
      <Container>
        <Content>
          <h2>Projects</h2>
          <Grid>
            <Flex>
              <a
                href="https://planets-facts-ten.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={planets} alt="planets facts project" />
              </a>
              <Text>
                <h3>Planets Facts</h3>
                <p>
                  8-page planets fact site, with different animations of the
                  solar system
                </p>
              </Text>
            </Flex>

            <Flex>
              <a
                href="https://sorting-visualizer-sandy.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sorting} alt="sorting visualizer project" />
              </a>
              <Text>
                <h3>Sorting visualizer</h3>
                <p>
                  app made to help visualize how the most popular sorting
                  algorithms work
                </p>
              </Text>
            </Flex>

            <Flex>
              <a
                href="https://minimal-reddit.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={minimalReddit} alt="minimal reddit project" />
              </a>
              <Text>
                <h3>Minimal reddit</h3>
                <p>
                  Reddit with a different design and whit only the important
                  functionality
                </p>
              </Text>
            </Flex>

            <Flex>
              <a
                href="https://memories-bader.netlify.app/posts"
                target="_blank"
                rel="noreferrer"
              >
                <img src={memories} alt="memories project" />
              </a>
              <Text>
                <h3>Memories</h3>
                <p>
                  Social media app where you can post your memories and see
                  other peoples memories
                </p>
              </Text>
            </Flex>
            {isOpen && (
              <Flex>
                <a
                  href="https://twitch-dashboard-liart.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitch} alt=" twitch app" />
                </a>
                <Text>
                  <h3>Twitch Dashboard</h3>
                  <p>
                    Twitch dashboard where you can see if your favourites
                    streamers are live
                  </p>
                </Text>
              </Flex>
            )}
            {isOpen && (
              <Flex>
                <a
                  href="https://spotify-lyrics-front.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={spotify} alt="spotify app" />
                </a>
                <Text>
                  <h3>Spotify lyrics</h3>
                  <p>
                    Website that plays and fetches lyrics of any song you want
                    to listen
                  </p>
                </Text>
              </Flex>
            )}
          </Grid>

          {!isOpen && (
            <SeeMoreBtn onClick={() => setIsOpen(!isOpen)}>
              See more projects
              <TriangleBtn />
            </SeeMoreBtn>
          )}
        </Content>
      </Container>
    </div>
  );
};

export default Projects;
