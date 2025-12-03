import { ReactElement, createElement } from 'react';
import { skillsData } from '../../skills/data/skillsData';

import finTrackDashboardPrev from '../../../assets/imagePreview/finTrackDashboardPrev.png'
import expenseTrackerPrev from '../../../assets/imagePreview/expenseTrackerPrev.png';
import patientTrackerPrev from '../../../assets/imagePreview/patientTrackerPrev.png';
import payFlowPrev from '../../../assets/imagePreview/payFlowPrev.png';

type ProjectCard = {
  key: string;
  image: string;
  link: string;
  code: string;
  skills: ReactElement[];
};

// Generate skill icons from names
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
    key: 'fintrack',
    image: finTrackDashboardPrev,
    link: 'https://fintrack-dashboard.vercel.app/',
    code: 'https://github.com/AndyAlvarezC/fintrack-dashboard',
    skills: generateSkillIcons(
      [
        'Vite',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Git',
        'Github',
        'Vercel',
      ],
      { Github: 'text-black', Vercel: 'text-black' }
    ),
  },
  {
    key: 'expense',
    image: expenseTrackerPrev,
    link: 'https://expense-tracker-manager-app.vercel.app/',
    code: 'https://github.com/AndyAlvarezC/expense-tracker',
    skills: generateSkillIcons(
      [
        'Vite',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Git',
        'Github',
        'Vercel',
      ],
      { Github: 'text-black', Vercel: 'text-black' }
    ),
  },
  {
    key: 'patient',
    image: patientTrackerPrev,
    link: 'https://patient-tracker-medical.vercel.app/',
    code: 'https://github.com/AndyAlvarezC/patient-tracker',
    skills: generateSkillIcons(
      [
        'Vite',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Git',
        'Github',
        'Vercel',
      ],
      { Github: 'text-black', Vercel: 'text-black' }
    ),
  },
  {
    key: 'payflow',
    image: payFlowPrev,
    link: 'https://payflow-fintech.vercel.app/',
    code: 'https://github.com/AndyAlvarezC/payflow',
    skills: generateSkillIcons(
      [
        'Vite',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Git',
        'Github',
        'Vercel',
      ],
      { Github: 'text-black', Vercel: 'text-black' }
    ),
  },
];
