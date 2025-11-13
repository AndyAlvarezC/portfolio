import SkillCard from './SkillCards';
import { skillsData } from '../data/skillsData';

const SkillsGrid: React.FC = () => {
  return (
    <div className="py-12 md:p-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skillsData.map((skill, i) => (
          <div
            key={skill.title}
            className="flex justify-center animate-fadeInUp"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <SkillCard {...skill} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.5s ease-out both; }
      `}</style>
    </div>
  );
};

export default SkillsGrid;
