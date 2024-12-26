import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-between p-8 relative">
      {/* Header Info */}
      <div className="flex justify-between items-start w-full text-sm text-gray-600 dark:text-gray-400 mb-12 font-sans">
        <span>Currently exploring generative art</span>
        <span>Based in Digital Space</span>
        <span>Work, About, Contact</span>
      </div>

      {/* Main Title */}
      <motion.div 
        className="flex flex-col space-y-4 my-auto"
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
        
        {/* Random Image */}
        <motion.div
          className="w-full max-w-md mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1550859492-d5da9d8e45f3"
            alt="Abstract Art"
            className="w-full h-48 object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="text-gray-600 dark:text-gray-400 font-sans">
            I create algorithmic art and
            <br />
            generative experiences
          </span>
        </motion.div>
        <motion.h2 
          className="text-[15vw] leading-none tracking-tighter font-bold"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          ZEKE.
        </motion.h2>
      </div>
    </section>
  );
};