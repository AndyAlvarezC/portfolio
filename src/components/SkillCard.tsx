import { ElementType, FC } from "react"
import { skillsDB } from "../data/skillDB"

type SkillsCardsProps = {
    title: string
    icon: ElementType | string
    color: string
}

const SkillCard: FC<SkillsCardsProps> = ({ title, icon: Icon, color }) => {
    return (
        <div className="w-full bg-[var(--second-bg-color)] text-white p-6 rounded-2xl shadow-[0px_0px_10px_rgba(0,0,0,0.5)]
            transition-all ease-in-out duration-300 flex flex-col items-center md:w-56 md:h-40 justify-center
            hover:shadow-[0px_0px_20px_rgba(37,99,235,1)] hover:scale-105 border-2 border-[var(--main-bg-color)] cursor-pointer">
            <Icon className={`w-6 h-6 ${color}`} />
            <h3 className="text-xm font-bold pt-4">{title}</h3>
        </div>
    )
}


export default function Cards() {
    return (
        <div className="text-white py-12 md:p-12">
            <div className="grid grid-cols-2 gap-6 md:flex md:flex-wrap md:justify-center md:gap-20">
                {skillsDB.map((skill, i) => {
                    const isLastOdd = i === skillsDB.length - 1 && skillsDB.length % 2 !== 0;
                    return (
                        <div
                            key={skill.title}
                            className={`${
                                isLastOdd ? "col-span-2 flex justify-center md:col-auto md:flex-none" : ""
                            }`}
                        >
                            <SkillCard title={skill.title} icon={skill.icon} color={skill.color} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
