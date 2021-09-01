import Logo from "./Logo/Logo";
import { Container,NavElement, ContactBtn } from "./Nav.styles";
const Nav = () => {
    return ( 
        <Container>
            <Logo/>
            <NavElement>
                <p>About me</p>
                <p>Projects</p>
                <ContactBtn>contact</ContactBtn>
            </NavElement>

        </Container>
     );
}
 
export default Nav;