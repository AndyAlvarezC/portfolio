import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/Header"
import Home from './sections/Home';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Home />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
    </Router>
  )
}

export default App
