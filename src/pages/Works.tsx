import { motion } from "framer-motion";

export default function Works() {
  return (
    <div className="min-h-screen bg-black px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-[15vw] font-bold text-[#ea384c] tracking-tighter leading-none"
      >
        FEATURED
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-[15vw] font-bold text-[#ea384c] tracking-tighter leading-none -mt-[4vw] mb-20"
      >
        WORKS.
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left"
        >
          <div className="text-white text-4xl font-light border-t border-[#333333] py-8 hover:text-[#ea384c] transition-colors cursor-pointer">
            blocs →
          </div>
          <div className="text-white text-4xl font-light border-t border-[#333333] py-8 hover:text-[#ea384c] transition-colors cursor-pointer">
            wavy drama →
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}