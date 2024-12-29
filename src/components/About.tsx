import { motion } from "framer-motion";
import { Twitter } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 md:px-20">
      <motion.div 
        className="max-w-4xl mx-auto space-y-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* About Section */}
        <div className="relative">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-[8vw] md:text-[6vw] font-bold tracking-tighter text-[#ea384c]">
              ABOUT.
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300 max-w-2xl">
              As a developer with an artist's heart, I blend the precision of code with the freedom of creative expression. 
              My work explores the beautiful intersection of technology and art, creating abstract generative pieces that 
              challenge the boundaries between human creativity and computational aesthetics.
            </p>
          </motion.div>
        </div>

        {/* Contact Section */}
        <div className="relative">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-[8vw] md:text-[6vw] font-bold tracking-tighter text-[#ea384c]">
              CONTACT.
            </h2>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-300">
                Interested in collaborating or purchasing a piece? Get in touch:
              </p>
              <motion.div 
                className="space-y-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a 
                  href="mailto:zeke@example.com"
                  className="inline-block text-2xl md:text-3xl font-mono hover:text-[#ea384c] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#ea384c] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  zeke@example.com
                </a>
                <div className="flex justify-start items-center gap-4 pt-4">
                  <a 
                    href="https://twitter.com/zeke" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#ea384c] transition-colors"
                  >
                    <Twitter size={32} />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}