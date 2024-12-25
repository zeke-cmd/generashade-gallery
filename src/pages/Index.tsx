import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ArtCard } from "@/components/ArtCard";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const artworks = [
  {
    title: "Digital Waves",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "A study in algorithmic wave patterns",
  },
  {
    title: "Neural Networks",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    description: "Visualization of artificial neural networks",
  },
  {
    title: "Geometric Dreams",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
    description: "Abstract geometric compositions",
  },
];

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-white dark:bg-black">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-8">
          <SidebarTrigger className="mb-8" />
          
          {/* Greeting Section with Dynamic Design */}
          <section className="min-h-[50vh] flex flex-col justify-center mb-20 relative overflow-hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 bg-black transform origin-bottom"
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative z-10 px-4 md:px-8"
            >
              <motion.h1 
                className="font-mono text-[15vw] md:text-[12vw] lg:text-[8vw] font-light mb-4 text-white tracking-tighter leading-none"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              >
                ZEKE
              </motion.h1>
              <motion.p 
                className="font-mono text-lg md:text-xl text-white tracking-tight border-l-4 border-white pl-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Abstract Generative Artist
              </motion.p>
            </motion.div>
          </section>

          {/* Hero Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-h-[50vh] flex flex-col justify-center mb-20 bg-white border-2 border-black p-6 md:p-12 relative"
          >
            <motion.div 
              className="absolute top-0 right-0 w-16 h-16 md:w-32 md:h-32 bg-black"
              animate={{ 
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <h2 className="font-mono text-4xl md:text-6xl lg:text-8xl font-light mb-6 text-black tracking-tighter">
              Generative
              <br />
              Art Gallery
            </h2>
            <p className="font-mono text-lg md:text-xl lg:text-2xl text-black max-w-xl border-l-4 border-black pl-4">
              Exploring the intersection of code and creativity through algorithmic art.
            </p>
          </motion.section>

          {/* Gallery Section */}
          <section id="gallery" className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-mono text-2xl md:text-3xl mb-12 text-black tracking-tight"
            >
              Featured Works
            </motion.h2>
            <div className="art-grid">
              {artworks.map((artwork, index) => (
                <motion.div
                  key={artwork.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <ArtCard {...artwork} />
                </motion.div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <motion.section 
            id="about" 
            className="max-w-2xl mb-20 bg-white border-2 border-black p-6 md:p-12 relative mx-4 md:mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-20 h-1 bg-black" />
            <h2 className="font-mono text-2xl md:text-3xl mb-6 text-black tracking-tight">About</h2>
            <p className="font-mono text-base md:text-lg leading-relaxed text-black">
              As a developer with an artist's heart, I blend the precision of code with the freedom of creative expression. 
              My work explores the beautiful intersection of technology and art, creating abstract generative pieces that 
              challenge the boundaries between human creativity and computational aesthetics.
            </p>
          </motion.section>

          {/* Contact Section */}
          <motion.section 
            id="contact" 
            className="max-w-2xl mb-20 mx-4 md:mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-2xl md:text-3xl mb-6 text-black tracking-tight">Contact</h2>
            <p className="font-mono text-base md:text-lg mb-4 text-black">
              Interested in collaborating or purchasing a piece? Get in touch:
            </p>
            <motion.a 
              href="mailto:zeke@example.com" 
              className="inline-block font-mono border-b-2 border-black hover:bg-black hover:text-white transition-colors text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              zeke@example.com
            </motion.a>
          </motion.section>

          {/* Theme Toggle Button */}
          <motion.div 
            className="fixed bottom-8 right-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12"
              onClick={() => document.documentElement.classList.toggle('dark')}
            >
              <span className="sr-only">Toggle theme</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </Button>
          </motion.div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
