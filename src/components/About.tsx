import { motion } from "framer-motion";
import { Twitter } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* About Section - Black Background */}
      <div className="w-full md:w-1/2 min-h-screen bg-black text-white py-20 px-6 md:px-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-xl mx-auto"
        >
          <h2 className="text-[8vw] md:text-[6vw] font-bold tracking-tighter text-[#ea384c]">
            ABOUT.
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
            As a developer with an artist's heart, I blend the precision of code with the freedom of creative expression. 
            My work explores the beautiful intersection of technology and art, creating abstract generative pieces that 
            challenge the boundaries between human creativity and computational aesthetics.
          </p>
        </motion.div>
      </div>

      {/* Contact Section - White Background */}
      <div className="w-full md:w-1/2 min-h-screen bg-white text-black py-20 px-6 md:px-12 flex flex-col justify-between">
        <motion.div 
          className="space-y-6 max-w-xl mx-auto mt-20"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <p className="text-xl md:text-2xl">
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
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto w-full space-y-8"
        >
          <h2 className="text-[10vw] md:text-[8vw] font-bold tracking-tighter text-[#ea384c]">
            CONTACT.
          </h2>
          <div className="flex justify-start items-center gap-4">
            <a 
              href="https://twitter.com/zeke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#ea384c] transition-colors"
            >
              <Twitter size={32} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}