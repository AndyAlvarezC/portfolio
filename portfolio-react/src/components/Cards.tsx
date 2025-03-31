import { ElementType, FC } from "react"
import { skillsData } from "../data/skillDB"

type SkillsCardsProps = {
    title: string
    icon: ElementType | string
    color: string
}

const SkillCard: FC<SkillsCardsProps> = ({ title, icon: Icon, color }) => {
    return (
        <div className="flex-1/4  bg-[var(--second-bg-color)] text-white p-6 rounded-2xl shadow-lg transition-all ease-in-out duration-300 flex flex-col items-center w-40 h-32 justify-center
        hover:shadow-blue-500 hover:scale-105 border-2 border-[var(--main-bg-color)] cursor-pointer">
            <Icon className={`w-6 h-6 mb-4 ${color}`} />
            <h3 className="text-xm font-bold">{title}</h3>
        </div>
    )
}

export default function Cards() {
    return (
        <div className="text-white p-12">
            <div className="flex flex-wrap justify-center gap-8">
                {skillsData.map((skill) => (
                <SkillCard key={skill.title} title={skill.title} icon={skill.icon} color={skill.color} />
            ))}
            </div>
        </div>
    );
}
