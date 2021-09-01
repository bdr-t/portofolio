import styled from "styled-components";

let shadow = {
  offsetShadow: "0 0 #0000",
  ringShadow: "0 0 #0000",
  twShadow: "0 15px 50px -15px rgba(0, 0, 0, 0.12)",
};

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-top: 10px;
  background-color: white;
  border-radius: 100px;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  padding: 16px 24px;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${(shadow.offsetShadow, shadow.ringShadow, shadow.twShadow)};
`;

export const NavElement = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
`;

export const ContactBtn = styled.button`
  height: fit-content;
  background-color: black;
  color: white;
  padding: 8px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 100px;
  outline: none;
  border: none;
`;
