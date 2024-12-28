import { useRef } from "react";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Section = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen flex items-center justify-center"
    >
      {children}
    </motion.section>
  );
};

const sections = [
  { id: "hero", Component: Hero },
  { id: "gallery", Component: Gallery },
  { id: "about", Component: About },
];

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className={isMobile ? "overflow-y-auto" : "h-screen overflow-y-auto"}>
      {sections.map(({ id, Component }) => (
        <div key={id} className="min-h-screen">
          <Section>
            <Component />
          </Section>
        </div>
      ))}
    </div>
  );
};

export default Index;