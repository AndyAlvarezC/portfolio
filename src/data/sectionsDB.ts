export interface Section {
  id: string;
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export const sectionsDB: Section[] = [
  {
    id: "home",
    title: "Home | Andy Álvarez",
    description: "Welcome to my portfolio as a Frontend Developer",
    image: "https://portfolio-andy-alvarez.vercel.app/homeprev.png",
    url: "https://portfolio-andy-alvarez.vercel.app/#home",
  },
  {
    id: "skills",
    title: "Skills | Andy Álvarez",
    description: "Check out my frontend skills",
    image: "https://portfolio-andy-alvarez.vercel.app/skillsprev.png",
    url: "https://portfolio-andy-alvarez.vercel.app/#skills",
  },
  {
    id: "projects",
    title: "Projects | Andy Álvarez",
    description: "See my projects and portfolio work",
    image: "https://portfolio-andy-alvarez.vercel.app/projectsprev.png",
    url: "https://portfolio-andy-alvarez.vercel.app/#projects",
  },
  {
    id: "about",
    title: "About Me | Andy Álvarez",
    description: "Learn more about me and my experience",
    image: "https://portfolio-andy-alvarez.vercel.app/aboutprev.png",
    url: "https://portfolio-andy-alvarez.vercel.app/#about",
  },
  {
    id: "contact",
    title: "Contact | Andy Álvarez",
    description: "Get in touch with me",
    image: "https://portfolio-andy-alvarez.vercel.app/contactprev.png",
    url: "https://portfolio-andy-alvarez.vercel.app/#contact",
  },
];
