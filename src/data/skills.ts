import { ElementType } from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

export interface SkillCardProps {
  icon: ElementType;
  size: number;
  color: string;
  title: string;
}

export const skillsCard: SkillCardProps[] = [
  { icon: SiHtml5, size: 32, color: 'text-orange-500', title: 'Html' },
  { icon: SiCss3, size: 32, color: 'text-blue-500', title: 'Css' },
  { icon: SiJavascript, size: 32, color: 'text-yellow-500', title: 'Javascript', },
  { icon: SiReact, size: 32, color: 'text-blue-400', title: 'React' },
  { icon: SiTailwindcss, size: 32, color: 'text-cyan-400', title: 'Tailwind CSS', },
  { icon: SiTypescript, size: 32, color: 'text-blue-600', title: 'Typescript' },
  { icon: SiNextdotjs, size: 32, color: 'text-white', title: 'NextJS' },
  { icon: SiGit, size: 32, color: 'text-red-500', title: 'Git' },
  { icon: FaAws, size: 32, color: 'text-[#FF9900]', title: 'AWS' },
  { icon: SiGithub, size: 32, color: 'text-white', title: 'Github' },
  { icon: SiFigma, size: 32, color: 'text-[#F24E1E]', title: 'Figma' },
  { icon: SiVercel, size: 32, color: 'text-white', title: 'Vercel' },
];
