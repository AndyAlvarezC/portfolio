import { SkillCardProps, skillsCard } from '../../data/skills';

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  size,
  icon: Icon,
  color,
}) => {
  return (
    <div
      className="group relative w-full bg-white p-8 rounded-2xl 
            flex flex-col items-center md:w-56 md:h-48 justify-center 
            border border-gray-100 transition-all duration-500 
            hover:scale-110 hover:-translate-y-2 cursor-pointer overflow-hidden"
      style={{
        boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
      
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3))',
          padding: '2px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Icon with gradient background */}
      <div className="relative z-10 mb-5 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm group-hover:shadow-lg border border-blue-100/50">
        <Icon size={size} className={`${color} transition-transform duration-500 group-hover:scale-110`} />
      </div>
      
      {/* Title */}
      <h3 className="relative z-10 text-lg md:text-xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
        {title}
      </h3>

      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
};

export default function Cards() {
  return (
    <div className="py-12 md:p-12">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-8">
        {skillsCard.map((skill, i) => {
          return (
            <div
              key={skill.title}
              className="flex justify-center"
              style={{
                animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`,
              }}
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

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}