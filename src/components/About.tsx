import { motion } from "framer-motion";

export function About() {
  return (
    <div className="min-h-screen py-20 px-6 md:px-20">
      <motion.div 
        className="max-w-4xl mx-auto space-y-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* About Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            ABOUT
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            As a developer with an artist's heart, I blend the precision of code with the freedom of creative expression. 
            My work explores the beautiful intersection of technology and art, creating abstract generative pieces that 
            challenge the boundaries between human creativity and computational aesthetics.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            CONTACT
          </h2>
          <p className="text-lg md:text-xl mb-4 text-gray-600 dark:text-gray-300">
            Interested in collaborating or purchasing a piece? Get in touch:
          </p>
          <motion.a 
            href="mailto:zeke@example.com"
            className="inline-block text-xl hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            zeke@example.com
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}