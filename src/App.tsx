import Header from "./layouts/Header"
import Home from './sections/Home';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './layouts/Footer';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
