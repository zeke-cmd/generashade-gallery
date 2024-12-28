import { motion } from "framer-motion";

export function About() {
  return (
    <div id="about" className="min-h-screen">
      <motion.section 
        className="max-w-4xl mb-20 mx-6 md:mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-white dark:bg-black border-2 border-black dark:border-white p-6 md:p-12 relative">
          <div className="absolute top-0 left-0 w-20 h-1 bg-black dark:bg-white" />
          <h2 className="text-[4vw] md:text-[3vw] leading-tight tracking-tighter font-bold mb-8">
            About
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            As a developer with an artist's heart, I blend the precision of code with the freedom of creative expression. 
            My work explores the beautiful intersection of technology and art, creating abstract generative pieces that 
            challenge the boundaries between human creativity and computational aesthetics.
          </p>
        </div>
      </motion.section>

      <motion.section 
        id="contact" 
        className="max-w-4xl mb-20 mx-6 md:mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[4vw] md:text-[3vw] leading-tight tracking-tighter font-bold mb-8">
          Contact
        </h2>
        <p className="text-lg md:text-xl mb-4">
          Interested in collaborating or purchasing a piece? Get in touch:
        </p>
        <motion.a 
          href="mailto:zeke@example.com" 
          className="inline-block border-b-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          zeke@example.com
        </motion.a>
      </motion.section>
    </div>
  );
}