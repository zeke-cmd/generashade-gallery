import { motion } from "framer-motion";
import { ArtCard } from "@/components/ArtCard";

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
  return (
    <section id="gallery" className="mb-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[4vw] md:text-[3vw] leading-tight tracking-tighter font-bold mb-12"
        >
          Featured Works
        </motion.h2>
        <div className="art-grid">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <ArtCard {...artwork} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}