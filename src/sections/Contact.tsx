import SocialCard from '../components/cards/SocialCard';
import Form from '../components/ui/form/Form';

import { Reveal } from '../hooks/useScrollReveal';

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col min-h-screen items-center justify-center w-full"
    >
      <div className="w-[80%] lg:w-full">
        <Reveal animation="fade-up">
          <h1 className="text-5xl font-bold mb-16 text-center">Contact</h1>
          <SocialCard />
          <Form />
        </Reveal>
      </div>
    </section>
  );
}
