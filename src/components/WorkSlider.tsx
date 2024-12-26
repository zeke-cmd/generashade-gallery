import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="w-full max-w-5xl px-4" onClick={(e) => e.stopPropagation()}>
        <Carousel className="relative">
          <CarouselContent>
            {works.map((work, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-white text-xl font-bold">{work.title}</h3>
                      <p className="text-white/80">{work.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </motion.div>
  );
}