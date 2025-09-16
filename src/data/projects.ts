import { ReactElement, createElement } from "react"
import { skillsData } from "../data/skillDB"
import patienttrackerprev from "../assets/patienttrackerprev.png"
import calculadoraprev from "../assets/calculadoraprev.png"
import payflowprev from "../assets/payflowprev.png"
import starbucksprev from "../assets/starbucksprev.png"

type ProjectCard = {
    title: string
    description: string
    image: string
    link: string
    code: string
    skills: ReactElement[]
}

const getSkillIcon = (skillName: string): ReactElement | undefined => {
    const skill = skillsData.find((s) => s.title === skillName)
    if (!skill) return undefined
    return createElement(skill.icon, { className: `text-2xl ${skill.color}` })
}

export const projects: ProjectCard[] = [
    {
        title: "PayFlow - Fintech",
        description: "Landing page for a fintech app",
        image: payflowprev,
        link: "https://payflow-fintech.vercel.app/",
        code: "https://github.com/AndyAlvarezC/payflow",
        skills: ["React", "Typescript", "Tailwind CSS", "Git", "Github"]
            .map(getSkillIcon)
            .filter((icon): icon is ReactElement => icon !== undefined)
    },
    {
        title: "Starbucks",
        description: "Starbucks-Inspired Landing Page",
        image: starbucksprev,
        link: "https://starbucks-idea.vercel.app/",
        code: "https://github.com/AndyAlvarezC/starbucks",
        skills: ["Html", "Css", "Javascript", "Git", "Github"]
            .map(getSkillIcon)
            .filter((icon): icon is ReactElement => icon !== undefined)
    },
    {
        title: "Patient Tracker",
        description: "An app to register patients and track veterinary medical records",
        image: patienttrackerprev,
        link: "https://patient-tracker-medical.vercel.app/",
        code: "https://github.com/AndyAlvarezC/patient-tracker",
        skills: ["React", "Typescript", "Tailwind CSS", "Git", "Github"]
            .map(getSkillIcon)
            .filter((icon): icon is ReactElement => icon !== undefined)
    },
    {
        title: "Tip and Bill Calculator",
        description: "An easy calculator to compute tips and total bills for a table",
        image: calculadoraprev,
        link: "https://calories-tracker-1.vercel.app/",
        code: "https://github.com/AndyAlvarezC/tip-and-bill-calculator",
        skills: ["React", "Typescript", "Tailwind CSS", "Git", "Github"]
            .map(getSkillIcon)
            .filter((icon): icon is ReactElement => icon !== undefined)
    },
]