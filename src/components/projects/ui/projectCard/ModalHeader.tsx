import { X } from 'lucide-react';

interface ModalHeaderProps {
  title: string;
  image: string;
  skills: React.ReactElement[];
  onClose: () => void;
}

// ModalHeader Component
export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  image,
  onClose,
}) => {
  return (
    <div className="relative h-60 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/95 via-indigo-600/95 to-purple-600/95 z-10" />
      
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover opacity-30"
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-white/20 cursor-pointer"
        aria-label="Close modal"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Title and skills overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-8 pb-10">
        {/* Project title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-2xl">
          {title}
        </h2>
        
      </div>
    </div>
  );
};