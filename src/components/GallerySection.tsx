import { motion } from "framer-motion";
import { ArtCard } from "@/components/ArtCard";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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

export const GallerySection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="min-h-screen p-8 mb-20">
      <motion.h2 className="font-mono text-2xl md:text-3xl mb-12 text-black dark:text-white tracking-tight">
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
    </section>
  );
};