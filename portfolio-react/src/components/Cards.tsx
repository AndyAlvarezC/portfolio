import { FC } from "react"
import { skillsData } from "../data/skillDB"

type SkillsCardsProps = {
    title: string
    icon: string
}

const SkillCard: FC<SkillsCardsProps> = ({ title, icon }) => {
    return (
        <div className="bg-[#0c0c0c] text-white p-6 rounded-2xl shadow-lg hover:shadow-blue-500 transition-all duration-300 max-w-xs flex flex-col items-center">
            <i className={`${icon} text-6xl mb-4`}></i>
            <h3 className="text-xl font-bold">{title}</h3>
        </div>
    )
}

export default function Cards() {
    return (
        <div className="bg-[var(--main-bg-color)] text-white py-20">
            <div className="flex flex-wrap justify-center gap-8">
                {skillsData.map((skill) => (
                <SkillCard key={skill.title} title={skill.title} icon={skill.icon} />
            ))}
            </div>
        </div>
    );
}
