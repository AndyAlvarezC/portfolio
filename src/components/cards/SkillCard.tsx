import { SkillCardProps, skillsCard } from '../../data/skills';

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  size,
  icon: Icon,
  color,
}) => {
  return (
    <div
      className="w-full bg-[var(--second-bg-color)] text-white p-6 rounded-2xl shadow-[0px_0px_10px_rgba(0,0,0,0.5)]
            flex flex-col items-center md:w-56 md:h-40 justify-center border-2 border-[var(--main-bg-color)] cursor-pointer transition duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:scale-105"
    >
      <Icon size={size} className={`${color}`} />
      <h3 className="md:text-xl font-bold pt-4">{title}</h3>
    </div>
  );
};

export default function Cards() {
  return (
    <div className="text-white py-12 md:p-12">
      <div className="grid grid-cols-2 gap-6 md:flex md:flex-wrap md:justify-center md:gap-20">
        {skillsCard.map((skill, i) => {
          const isLastOdd =
            i === skillsCard.length - 1 && skillsCard.length % 2 !== 0;
          return (
            <div
              key={skill.title}
              className={`${
                isLastOdd
                  ? 'col-span-2 flex justify-center md:col-auto md:flex-none'
                  : ''
              }`}
            >
              <SkillCard
                title={skill.title}
                size={skill.size}
                icon={skill.icon}
                color={skill.color}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
