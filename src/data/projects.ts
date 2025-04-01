import { ReactElement, createElement } from "react"
import { skillsData } from "../data/skillDB"
import guitarlaprev from "../assets/guitarlaprev.png"
import calculadoraprev from "../assets/calculadoraprev.png"
import caloriasprev from "../assets/caloriasprev.png"

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
        title: "GuitarLA",
        description: "E-commerce website for guitars and accessories",
        image: guitarlaprev,
        link: "https://shopguitarla.netlify.app/",
        skills: ["React", "TypeScript"]
            .map(getSkillIcon)
            .filter((icon): icon is ReactElement => icon !== undefined)
    },
    {
        title: "Calculadora de Consumo",
        description: "A simple calculator to calculate the consumption of a device in kWh",
        image: calculadoraprev,
        link: "https://calculadorapropinasyconsumo.netlify.app/",
        skills: ["React", "TypeScript", "Tailwind CSS"]
            .map(getSkillIcon)
            .filter((icon): icon is ReactElement => icon !== undefined)
    },
    {
        title: "Calories Tracker",
        description: "A simple app to track your daily calorie intake",
        image: caloriasprev,
        link: "https://trackyoucalorie.netlify.app/",
        skills: ["React", "TypeScript", "Tailwind CSS"]
            .map(getSkillIcon)
            .filter((icon): icon is ReactElement => icon !== undefined)
    }
]