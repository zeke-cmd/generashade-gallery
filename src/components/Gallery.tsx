import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Gallery() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen bg-black px-4 md:px-8">
      {/* Gallery Title */}
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className={`${
          isMobile ? "text-6xl pt-8" : "text-[12rem] absolute top-8 right-8"
        } font-bold text-[#ea384c] tracking-tighter leading-none`}
      >
        THE GALLERY.
      </motion.h1>

      {/* Description Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={`${
          isMobile ? "mt-4" : "absolute top-48 right-8"
        } max-w-md text-gray-400 text-right ${isMobile ? "text-left" : ""}`}
      >
        Exploring the intersection of algorithms and aesthetics through generative art pieces 
        that push the boundaries of digital creativity.
      </motion.p>

      {/* Featured Works Title and Arrow */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className={`${
          isMobile ? "mt-8" : "absolute bottom-8 left-8"
        } flex items-center gap-4 group`}
      >
        <h2 className="text-2xl font-bold text-white group-hover:underline">
          FEATURED WORKS
        </h2>
        <ArrowRight className="w-6 h-6 text-white transition-transform group-hover:translate-x-2" />
      </motion.div>
    </section>
  );
}