import { useState } from "react";
import { motion } from "framer-motion";
import { ArtCard } from "@/components/ArtCard";
import { WorkSlider } from "@/components/WorkSlider";

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
    <section id="gallery" className="relative min-h-screen bg-black text-white">
      {/* Gallery Title */}
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="absolute top-8 left-8 text-6xl font-bold tracking-tighter"
      >
        Gallery
      </motion.h1>

      {/* Featured Works Title */}
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="absolute bottom-8 right-8 text-2xl font-light"
      >
        Featured Works
      </motion.h2>

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-full max-w-6xl mx-auto px-6 cursor-pointer group"
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
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
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