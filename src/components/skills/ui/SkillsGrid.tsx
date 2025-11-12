import { useMemo } from "react";
import SkillCard from "./SkillCards";
import { skillsData } from "../data/skillsData";

const SkillsGrid: React.FC = () => {
  // Calculate optimal columns to avoid incomplete rows
  const getOptimalColumns = (total: number, screenSize: string) => {
    const preferences: { [key: string]: number[] } = {
      mobile: [2, 3, 4],
      tablet: [3, 4, 2],
      desktop: [4, 3, 6],
      xl: [4, 3, 6]
    };

    const preferred = preferences[screenSize] || [3, 4, 2];
    
    for (const cols of preferred) {
      if (total % cols === 0) return cols;
    }
    
    return preferred[0];
  };

  const columns = useMemo(() => {
    const total = skillsData.length;
    return {
      mobile: getOptimalColumns(total, 'mobile'),
      tablet: getOptimalColumns(total, 'tablet'),
      desktop: getOptimalColumns(total, 'desktop'),
      xl: getOptimalColumns(total, 'xl')
    };
  }, []);

  const gridClass = `grid gap-6 md:gap-8 grid-cols-${columns.mobile} md:grid-cols-${columns.tablet} lg:grid-cols-${columns.desktop} xl:grid-cols-${columns.xl}`;

  return (
    <div className="py-12 md:p-12">
      <div className={gridClass}>
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