import { useState } from "react";
import { motion } from "framer-motion";
import { ArtCard } from "@/components/ArtCard";
import { WorkSlider } from "@/components/WorkSlider";
import { ArrowRight } from "lucide-react";

const artworks = [
  {
    title: "Digital Waves",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "A study in algorithmic wave patterns",
  },
  {
    title: "Neural Networks",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    description: "Visualization of artificial neural networks",
  },
  {
    title: "Geometric Dreams",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
    description: "Abstract geometric compositions",
  },
];

export function Gallery() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-black text-white p-8">
      {/* Gallery Title */}
      <motion.h1
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="absolute top-8 right-8 text-[5rem] font-bold text-[#ea384c] tracking-tighter"
      >
        Gallery
      </motion.h1>

      {/* Descriptive Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute top-48 right-8 max-w-md text-gray-400 text-right"
      >
        Exploring the intersection of algorithms and aesthetics through generative art pieces that push the boundaries of digital creativity.
      </motion.p>

      {/* Featured Works Title and Arrow */}
      <div 
        className="absolute bottom-8 left-8 flex items-center gap-4 cursor-pointer group"
        onClick={() => setIsSliderOpen(true)}
      >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold"
        >
          Featured Works
        </motion.h2>
        <div className="border-2 border-white rounded-full p-2 transition-transform group-hover:translate-x-2">
          <ArrowRight className="w-6 h-6" />
        </div>
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-full max-w-6xl mx-auto px-6 cursor-pointer"
          onClick={() => setIsSliderOpen(true)}
        >
          <div className="art-grid">
            {artworks.map((artwork, index) => (
              <motion.div
                key={artwork.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <ArtCard {...artwork} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Slider */}
      <WorkSlider
        isOpen={isSliderOpen}
        onClose={() => setIsSliderOpen(false)}
        works={artworks}
      />
    </section>
  );
}