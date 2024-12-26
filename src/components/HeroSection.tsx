import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
    });
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen w-full flex flex-col justify-between p-8 relative">
      {/* Header Info */}
      <div className="flex justify-between items-start w-full text-sm text-gray-600 dark:text-gray-400 mb-12 font-sans">
        <span>Currently exploring generative art</span>
        <span>Based in Digital Space</span>
        <span>Work, About, Contact</span>
      </div>

      {/* Main Title */}
      <motion.div 
        className="flex flex-col space-y-4 mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-[8vw] leading-none tracking-tighter font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          ABSTRACT
          <br />
          GENERATIVE
          <br />
          ARTIST
        </motion.h1>
        
        {/* Image and Description Section */}
        <div className="flex flex-col items-center relative mt-8">
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <img 
              src="/lovable-uploads/000a987e-caed-41d1-83d6-a88d612e3499.png"
              alt="Abstract Art"
              className="w-full h-48 object-cover"
            />
            <motion.div 
              className="mt-4 text-gray-600 dark:text-gray-400 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I create algorithmic art and
              <br />
              generative experiences
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="absolute right-0 bottom-0 text-[15vw] leading-none tracking-tighter font-bold translate-y-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            ZEKE.
          </motion.h2>
        </div>
      </motion.div>
    </section>
  );
};