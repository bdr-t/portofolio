import Logo from "./Logo/Logo";
import { Container, NavElement, ContactBtnHover } from "./Nav.styles";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <Container>
      <Link to="hero" smooth={true} duration={1000}>
        <Logo />
      </Link>
      <NavElement>
        <Link to="about-me" smooth={true} duration={1000}>
          <p>About me</p>
        </Link>

        <Link to="projects" smooth={true} duration={1000} offset={-120}>
          <ContactBtnHover>Projects</ContactBtnHover>
        </Link>
      </NavElement>
      {/* <HamIcon size={30} onClick={()=> setIsHamburger(!isHamburger)}/>
            {isHamburger && <Hamburger/>} */}
    </Container>
  );
};

export default Nav;
