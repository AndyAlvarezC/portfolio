import { ElementType } from 'react';
import { socialLinks } from '../../data/contact';

export default function SocialCard() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center w-full mb-16">
      {socialLinks.map(
        ({
          name,
          icon: Icon,
          link,
          color,
        }: {
          name: string;
          icon: ElementType;
          link: string;
          color: string;
        }, index: number) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 py-5 px-8 w-full md:w-auto bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer"
            style={{
              boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
              animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
            }}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
            
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
            <div className="relative z-10 w-14 h-14 rounded-xl bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm group-hover:shadow-lg border border-blue-100/50">
              <Icon className={`text-3xl ${color} transition-transform duration-500 group-hover:scale-110`} />
            </div>
            
            {/* Name */}
            <span className="relative z-10 font-bold text-gray-900 text-lg group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:via-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
              {name}
            </span>

            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
          </a>
        )
      )}

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