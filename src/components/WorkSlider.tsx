import { motion } from "framer-motion";
import { X } from "lucide-react";

interface WorkSliderProps {
  isOpen: boolean;
  onClose: () => void;
  works: Array<{
    title: string;
    image: string;
    description: string;
  }>;
}

export function WorkSlider({ isOpen, onClose, works }: WorkSliderProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-start justify-center overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl px-4 py-12 my-8 relative mx-4" 
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white hover:text-[#ea384c] transition-colors bg-black/50 rounded-full"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <div className="space-y-8 md:space-y-16">
          {works.map((work, index) => (
            <div key={index} className="bg-black/50 p-4 md:p-8 rounded-lg space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{work.title}</h2>
              <div className="aspect-video relative overflow-hidden rounded-lg mb-4 md:mb-6">
                <img
                  src={work.image}
                  alt={work.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}