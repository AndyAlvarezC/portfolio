import { ElementType } from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiTailwindcss, SiPython, SiGithub, SiGit } from "react-icons/si";

type SkillCard = {
    icon: ElementType
    color: string
    title: string

}

export const skillsData: SkillCard[] = [
    { icon: SiHtml5, color: "text-orange-500", title: "HTML" },
    { icon: SiCss3, color: "text-blue-500", title: "CSS" },
    { icon: SiJavascript, color: "text-yellow-500", title: "JavaScript" },
    { icon: SiReact, color: "text-blue-400", title: "React" },
    { icon: SiTypescript, color: "text-blue-600", title: "TypeScript" },
    { icon: SiTailwindcss, color: "text-cyan-400", title: "Tailwind CSS" },
    { icon: SiPython, color: "text-yellow-400", title: "Python" },
    { icon: SiGithub, color: "text-gray-300", title: "GitHub" },
    { icon: SiGit, color: "text-red-500", title: "Git" },
]
