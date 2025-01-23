import "./App.css";
import { Fade } from "react-awesome-reveal";
import NavBar from "./components/NavBar";
import Header from "./pages/Header";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Creations from "./pages/Creations";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Proyectos from "./Proyectos";

function App() {
  return (
    <>
      <NavBar />
      <Fade cascade damping={0.1}>
        <Header />
        <AboutMe />
        <Skills />
        <Creations proyectos={Proyectos} />
        <Contact />
      </Fade>
      <Footer />
    </>
  );
}

export default App;
