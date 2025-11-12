import Section from '../components/ui/Section';
import HomeBackground from '../components/home/ui/HomeBackground';

import { Reveal } from '../hooks/useScrollReveal';
import MainTitle from '../components/home/ui/MainTitle';
import AnimatedText from '../components/home/ui/AnimatedText';
import HireButton from '../components/home/ui/HireButton';


// Home section component
export default function Home() {

  return (
    <Section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center px-4"
    >
      {/* Premium blurred backgrounds */}
      <div>
        <HomeBackground />
      </div>

      {/* Fade-in animation */}
      <Reveal animation="fade-up">
        <div className="relative z-10 flex flex-col items-center justify-center gap-y-6">
          {/* Main title with gradient */}
          <MainTitle />

          {/* Animated text under the title */}
          <AnimatedText />

          {/* Primary button with glow effect */}
          <HireButton />
        </div>
      </Reveal>
    </Section>
  );
}
