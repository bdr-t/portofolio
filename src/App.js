import "./App.css";

import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import AboutMe from "./components/AboutMe/AboutMe";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Projects />
      <AboutMe />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
