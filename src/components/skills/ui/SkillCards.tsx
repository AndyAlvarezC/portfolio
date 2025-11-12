import { SkillCardsProps } from "../data/skillsData";

const SkillCard: React.FC<SkillCardsProps> = ({ title, size, icon: Icon, color }) => {
  return (
    // Card container with hover and scale effects
    <div
      className="group relative w-full bg-white p-8 rounded-2xl flex flex-col items-center md:w-56 md:h-48 justify-center border border-gray-100 transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer overflow-hidden"
      style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500" />

      {/* Animated border gradient on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3))',
          padding: '2px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Icon wrapper with hover scale and shadow effects */}
      <div className="relative z-10 mb-5 w-20 h-20 rounded-2xl bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm group-hover:shadow-lg border border-blue-100/50">
        {/* Render skill icon */}
        <Icon size={size} className={`${color} transition-transform duration-500 group-hover:scale-110`} />
      </div>

      {/* Skill title - siempre usa bg-clip-text y text-transparent */}
      <h3 
        className="relative z-10 text-lg md:text-xl font-bold bg-clip-text text-transparent transition-all duration-500"
        style={{
          backgroundImage: 'linear-gradient(to bottom right, rgb(17, 24, 39), rgb(17, 24, 39), rgb(17, 24, 39))',
        }}
      >
        <span className="group-hover:hidden">{title}</span>
        <span 
          className="hidden group-hover:inline bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          {title}
        </span>
      </h3>

      {/* Shine effect overlay */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-br from-transparent via-white/20 to-transparent" />
    </div>
  );
};

export default SkillCard;