import Logo from "./Logo/Logo";
import { Container,NavElement, ContactBtn } from "./Nav.styles";
import {useState, useEffect} from 'react'
const Nav = ({change}) => {
    const [theme, setTheme] = useState(change ? 1 : 0)
    useEffect(() =>{
        setTheme(change ? 1 : 0)
        console.log(change)
    }, [change])
    
    return ( 
        <Container theme={theme}>
            <Logo theme={theme}/>
            <NavElement>
                <p>About me</p>
                <p>Projects</p>
                <ContactBtn theme={theme}>contact</ContactBtn>
            </NavElement>

        </Container>
     );
}
 
export default Nav;