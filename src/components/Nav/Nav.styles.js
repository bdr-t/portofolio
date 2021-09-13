import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

let shadow = {
  offsetShadow: "0 0 #0000",
  ringShadow: "0 0 #0000",
  twShadow: "0 15px 50px -15px rgba(0, 0, 0, 0.12)",
};

export const Container = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  margin-top: 10px;
  background-color: ${({ theme }) => (theme === 1 ? "black" : "white")};
  border-radius: 100px;
  width: 85%;
  padding: 16px 24px;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${(shadow.offsetShadow, shadow.ringShadow, shadow.twShadow)};
  position: fixed;
  z-index: 12;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  p {
    color: ${({ theme }) => (theme === 1 ? "white" : "black")};
    cursor: pointer;
  }
`;

export const NavElement = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  @media (max-width: 768px) {
    gap: 1em;
  }
`;

export const ContactBtn = styled.button`
  height: fit-content;
  background-color: ${({ theme }) => (theme === 1 ? "white" : "black")};
  color: white;
  padding: 8px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 100px;
  outline: none;
  border: none;
  color: ${({ theme }) => (theme === 1 ? "black" : "white")};
  cursor: pointer;
`;

export const ContactBtnHover = styled(ContactBtn)`
  &:hover {
    box-shadow: 0 5px 10px 0 rgba(205, 209, 215, 0.8);
    background: linear-gradient(to right, #ea0140, #680641);
    color: #fff;
    animation: gradient 2.5s ease infinite;
    box-sizing: border-box;
    background-size: 300% 300%;
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
`;

export const HamIcon = styled(GiHamburgerMenu)`
  @media (min-width: 768px) {
    dispay: none;
  }
`;
