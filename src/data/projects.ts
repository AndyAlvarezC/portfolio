import { ReactElement, createElement } from "react"
import { skillsData } from "../data/skillDB"
import patienttrackerprev from "../assets/patienttrackerprev.png"
import calculadoraprev from "../assets/calculadoraprev.png"
import caloriasprev from "../assets/caloriasprev.png"
import starbucksprev from "../assets/starbucksprev.png"

type ProjectCard = {
    title: string
    description: string
    image: string
    link: string
    skills: ReactElement[]
}

const getSkillIcon = (skillName: string): ReactElement | undefined => {
    const skill = skillsData.find((s) => s.title === skillName)
    if (!skill) return undefined
    return createElement(skill.icon, { className: `text-2xl ${skill.color}` })
}

export const projects: ProjectCard[] = [
    {
        title: "Starbucks",
        description: "Starbucks-Inspired Landing Page",
        image: starbucksprev,
        link: "https://starbucks-idea.vercel.app/",
        skills: ["Html", "Css", "Javascript", "Git", "Github"]
            .map(getSkillIcon)
            .filter((icon): icon is ReactElement => icon !== undefined)
    },
    {
        title: "Patient Tracker",
        description: "An app to register patients and track veterinary medical records",
        image: patienttrackerprev,
        link: "https://patient-tracker-medical.vercel.app/",
        skills: ["React", "Typescript", "Tailwind CSS", "Git", "Github"]
            .map(getSkillIcon)
            .filter((icon): icon is ReactElement => icon !== undefined)
    },
    {
        title: "Calories Tracker",
        description: "A simple app to track your daily calorie intake",
        image: caloriasprev,
        link: "https://calories-tracker-1.vercel.app/",
        skills: ["React", "Typescript", "Tailwind CSS", "Git", "Github"]
            .map(getSkillIcon)
            .filter((icon): icon is ReactElement => icon !== undefined)
    },
    {
        title: "Tip and Bill Calculator",
        description: "An easy calculator to compute tips and total bills for a table",
        image: calculadoraprev,
        link: "https://tip-and-bill-calculator-1.vercel.app/",
        skills: ["React", "Typescript", "Tailwind CSS", "Git", "Github"]
            .map(getSkillIcon)
            .filter((icon): icon is ReactElement => icon !== undefined)
    }
]