import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArtworkSlideshow } from "./ArtworkSlideshow";

export function Gallery() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section className="relative min-h-screen bg-black px-4 md:px-8">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl pt-8 font-bold text-[#ea384c] tracking-tighter leading-none"
        >
          THE GALLERY.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-4 max-w-md text-gray-400 text-left text-sm md:text-base"
        >
          Exploring the intersection of algorithms and aesthetics through generative art pieces 
          that push the boundaries of digital creativity.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-8 flex items-center gap-2 md:gap-4 group"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white group-hover:underline">
            FEATURED WORKS
          </h2>
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform group-hover:translate-x-2" />
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-black px-4 md:px-8 py-8 md:py-12 flex flex-col justify-between">
      <div className="flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[15vw] md:text-[20vw] font-bold text-[#ea384c] tracking-tighter leading-none"
        >
          THE
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[15vw] md:text-[20vw] font-bold text-[#ea384c] tracking-tighter leading-none -mt-[3vw] md:-mt-[5vw]"
        >
          GALLERY.
        </motion.h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mt-8 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <ArtworkSlideshow />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-md text-gray-400 text-left md:text-right text-sm md:text-lg mt-4 md:mt-0"
        >
          Exploring the intersection of algorithms and aesthetics through generative art pieces 
          that push the boundaries of digital creativity.
        </motion.p>
      </div>
    </section>
  );
}