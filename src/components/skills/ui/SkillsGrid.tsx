import SkillCard from "./SkillCards";

import { skillsData } from "../data/skillsData";

const SkillsGrid: React.FC = () => {
  return (
    // Container for the skills grid
    <div className="py-12 md:p-12">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-8">
        {skillsData.map((skill, i) => (
          <div
            key={skill.title}
            className="flex justify-center"
            style={{ animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both` }}
          >
            <SkillCard {...skill} />
          </div>
        ))}
      </div>

      {/* Inline CSS for the fade-in-up animation */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default SkillsGrid;
