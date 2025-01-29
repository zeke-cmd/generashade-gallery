import { motion } from "framer-motion";

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
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl px-4 py-12 my-8" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-16">
          {works.map((work, index) => (
            <div key={index} className="bg-black/50 p-8 rounded-lg space-y-6">
              <h2 className="text-3xl font-bold text-white mb-4">{work.title}</h2>
              <div className="aspect-video relative overflow-hidden rounded-lg mb-6">
                <img
                  src={work.image}
                  alt={work.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-white/80 leading-relaxed">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}