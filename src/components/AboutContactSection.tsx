import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const AboutContactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <section ref={sectionRef} id="about-contact" className="min-h-screen p-8">
      {/* About Section */}
      <motion.div className="max-w-4xl mb-20 mx-auto">
        <div className="relative mb-12">
          <h2 className="text-[5vw] font-bold tracking-tighter mb-12 text-black dark:text-white">About</h2>
          <div className="absolute top-0 left-0 w-20 h-1 bg-black dark:bg-white" />
        </div>
        <p className="text-xl md:text-2xl leading-relaxed text-black dark:text-white tracking-tight">
          As a developer with an artist's heart, I blend the precision of code with the freedom of creative expression. 
          My work explores the beautiful intersection of technology and art, creating abstract generative pieces that 
          challenge the boundaries between human creativity and computational aesthetics.
        </p>
      </motion.div>

      {/* Contact Section */}
      <motion.div className="max-w-4xl mx-auto">
        <h2 className="text-[5vw] font-bold tracking-tighter mb-12 text-black dark:text-white">Contact</h2>
        <p className="text-xl md:text-2xl mb-8 text-black dark:text-white tracking-tight">
          Interested in collaborating or purchasing a piece? Get in touch:
        </p>
        <motion.a 
          href="mailto:zeke@example.com" 
          className="inline-block text-2xl md:text-3xl font-bold tracking-tighter border-b-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-black dark:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          zeke@example.com
        </motion.a>
      </motion.div>
    </section>
  );
};