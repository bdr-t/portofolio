import { Bar, Container, Link } from "./Footer.style";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Bar></Bar>

      <Container>
        <Link
          href="https://github.com/wakfuld23"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={30} color="#24292F" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/bader-tabeche/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={30} color="#0A66C2" />
        </Link>
      </Container>
    </>
  );
};

export default Footer;
