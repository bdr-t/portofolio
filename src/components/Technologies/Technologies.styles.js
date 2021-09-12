import styled from "styled-components";

export const Container = styled.div`
  width: 75%;

  /* background-color: lightgreen; */
  margin: 0 auto;
  padding: 66px 1em;

  h2 {
    font-size: 50px;
    font-weight: 700;
    background: linear-gradient(to right, #680641, #bc0341, #ea0140);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 60px;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 40px;
    }
    p {
      font-size: 16px;
    }
  }
  p {
    font-size: 18px;
  }

  img {
    width: 50px;
    height: auto;
  }
`;

export const Grid = styled.div`
  display: grid;
  padding: 1em;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
`;

export const Flex = styled.div`
  display: flex;
  margin-top: 2em;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: center;
`;

export const IconContainer = styled.div`
  width: 75px;
  height: 75px;
  /* background-color: black; */
  border-radius: 4px;
  display: grid;
  place-content: center;
  border: 2px solid #680641;
  border: 2px solid transparent;
  background-image: linear-gradient(to right, #680641, #ea0140),
    linear-gradient(to bottom, #ea0140, #680641),
    linear-gradient(to left, #680641, #ea0140),
    linear-gradient(to top, #ea0140, #680641);
  background-origin: border-box;
  background-size: 100% 3px, 3px 100%, 100% 3px, 3px 100%;
  background-position: top left, top right, bottom right, bottom left;
  background-repeat: no-repeat;
`;
