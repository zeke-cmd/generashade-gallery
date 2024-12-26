import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-between p-6 relative">
      <div className="flex justify-between items-start w-full text-sm text-gray-600 dark:text-gray-400 mb-8">
        <a 
          href="#gallery" 
          className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
        >
          Currently exploring generative art
        </a>
        <span>Based in Digital Space</span>
        <div className="space-x-4">
          <a 
            href="#about" 
            className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Work • About • Contact
          </a>
        </div>
      </div>

      <motion.div 
        className="flex flex-col space-y-2 my-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-[7vw] md:text-[6vw] lg:text-[5vw] leading-tight tracking-tighter font-bold"
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
        
        <motion.div
          className="w-full max-w-sm mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1550859492-d5da9d8e45f3"
            alt="Abstract Art"
            className="w-full h-32 object-cover"
          />
        </motion.div>
      </motion.div>

      <div className="flex justify-between items-end w-full mt-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="text-gray-600 dark:text-gray-400">
            I create algorithmic art and
            <br />
            generative experiences
          </span>
        </motion.div>
        <motion.h2 
          className="text-[16vw] leading-none tracking-tighter font-bold"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          ZEKE.
        </motion.h2>
      </div>
    </section>
  );
}
