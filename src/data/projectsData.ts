import { ReactElement, createElement } from 'react';
import { skillsData } from './skillsData';

import calculatorPrev from '../assets/imagePreview/calculatorPrev.png';
import patientTrackerPrev from '../assets/imagePreview/patientTrackerPrev.png';
import payFlowPrev from '../assets/imagePreview/payFlowPrev.png';
import agencyFlexInnovationsPrev from '../assets/imagePreview/agencyFlexInnovationsPrev.png'

type ProjectCard = {
  title: string;
  description: string;
  image: string;
  link: string;
  code: string;
  skills: ReactElement[];
};

const generateSkillIcons = (
  skillNames: string[],
  overrideColorMap?: Record<string, string>
): ReactElement[] => {
  return skillNames
    .map((name) => {
      const skill = skillsData.find((s) => s.title === name);
      if (!skill) return undefined;

      const color = overrideColorMap?.[name] ?? skill.color;
      return createElement(skill.icon, { className: `text-2xl ${color}` });
    })
    .filter((icon): icon is ReactElement => icon !== undefined);
};

export const projectsData: ProjectCard[] = [
  {
    title: 'PayFlow - Fintech',
    description: 'Landing page for a fintech app',
    image: payFlowPrev,
    link: 'https://payflow-fintech.vercel.app/',
    code: 'https://github.com/AndyAlvarezC/payflow',
    skills: generateSkillIcons(
      ['React', 'Typescript', 'Tailwind CSS', 'Git', 'Github', 'Vercel'],
      { Github: 'text-black', Vercel: 'text-black' }
    ),
  },
  {
    title: 'Agency Flex Innovations',
    description: 'Landing page for a modern digital agency',
    image: agencyFlexInnovationsPrev,
    link: 'https://agencyflexinnovations.com/',
    code: 'https://github.com/efeluxy/digital-agencyflexinnovations-personal',
    skills: generateSkillIcons(
      ['React', 'TypeScript', 'TailwindCSS', 'Git', 'Github', 'Vercel'],
      { Github: 'text-black', Vercel: 'text-black' }
    ),
  },
  {
    title: 'Patient Tracker',
    description:
      'An app to register patients and track veterinary medical records',
    image: patientTrackerPrev,
    link: 'https://patient-tracker-medical.vercel.app/',
    code: 'https://github.com/AndyAlvarezC/patient-tracker',
    skills: generateSkillIcons(
      ['React', 'Typescript', 'Tailwind CSS', 'Git', 'Github', 'Vercel'],
      { Github: 'text-black', Vercel: 'text-black' }
    ),
  },
  {
    title: 'Tip and Bill Calculator',
    description:
      'An easy calculator to compute tips and total bills for a table',
    image: calculatorPrev,
    link: 'https://tip-and-bill-calculator-1.vercel.app/',
    code: 'https://github.com/AndyAlvarezC/tip-and-bill-calculator',
    skills: generateSkillIcons(
      ['React', 'Typescript', 'Tailwind CSS', 'Git', 'Github', 'Vercel'],
      { Github: 'text-black', Vercel: 'text-black' }
    ),
  },
];
