import { ElementType, FC } from "react"
import { skillsData } from "../data/skillDB"

type SkillsCardsProps = {
    title: string
    icon: ElementType | string
    color: string
}

const SkillCard: FC<SkillsCardsProps> = ({ title, icon: Icon, color }) => {
    return (
        <div className="md:flex-1/4 bg-[var(--second-bg-color)] text-white p-6 rounded-2xl shadow-[0px_0px_10px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-300 flex flex-col items-center w-24 md:w-40 md:h-32 justify-center
        hover:shadow-[0px_0px_20px_rgba(37,99,235,1)] hover:scale-105 border-2 border-[var(--main-bg-color)] cursor-pointer">
            <Icon className={`w-6 h-6 mb-4 ${color}`} />
            <h3 className="text-xm font-bold">{title}</h3>
        </div>
    )
}

export default function Cards() {
    return (
        <div className="text-white py-12 md:p-12">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                {skillsData.map((skill) => (
                <SkillCard key={skill.title} title={skill.title} icon={skill.icon} color={skill.color} />
            ))}
            </div>
        </div>
    );
}
