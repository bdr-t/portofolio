import "./App.css";
import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  const [change, setChange] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 600 && position < 850) {
      setChange(true)
    }
    else {
      setChange(false)
    }
  };


  return (
    <div className="App" style={{backgroundColor: change ? 'black' : ''}}>
      <Nav change={change}/>
      <Hero change={change} />
      <Projects change={change} />
      <AboutMe/>
      <Technologies change={change} />
    </div>
  );
}

export default App;
