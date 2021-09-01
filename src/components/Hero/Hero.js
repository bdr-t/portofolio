import BackgroundAnimation from "../../BackgroundAnimation";
import { Container, Content, ProjectsBtn} from "./Hero.styles";
import {useState} from 'react'

const Hero = () => {
    const [color, setColor] = useState('black')
    const [background, setBackground] = useState('white')
 
    window.onscroll = function (ev) {
        if(window.innerHeight > 700){
        }
        if (window.innerHeight + window.pageYOffset >= window.innerHeight) {
          setColor('white')
          setBackground('black')
        }
      };

    return ( 
        <Container color={color} background={background}>
            <Content>
                <h1>LOREM LOREM </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh felis, finibus vel enim in, aliquet maximus leo. Etiam faucibus justo hendrerit, gravida nunc nec, fringilla augue. Pellentesque vehicula in mi vitae gravida. Proin aliquam malesuada malesuada. Nunc condimentum porta tellus, id facilisis ipsum porta eget. Pellentesque imperdiet lacinia enim id fringilla. Donec vestibulum massa dui, non congue ante eleifend non. Donec non elit placerat, dapibus turpis nec, maximus purus.</p>
                <ProjectsBtn>Projects</ProjectsBtn>
            </Content>
            <div>
                <BackgroundAnimation/>
            </div>
            

        </Container>
     );
}
 
export default Hero;