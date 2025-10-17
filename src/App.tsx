import Header from './layouts/Header';
import Home from './sections/Home';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './layouts/Footer';

import { useAnalytics } from './hooks/useAnalytics';
import { useDynamicSeo } from './hooks/useDynamicSeo';
import { useHashScroll } from './hooks/useHashScroll';
import { sections } from './data/sections';
import { Seo } from './seo/Seo';

function App() {
  useAnalytics();
  useDynamicSeo(sections);
  useHashScroll();

  return (
    <div>
      <Seo
        title="Home | Andy Álvarez"
        description="Welcome to my portfolio as a Front-end Developer"
        image="https://portfolio-andy-alvarez.vercel.app/homeprev.png"
        url={window.location.href}
      />
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
