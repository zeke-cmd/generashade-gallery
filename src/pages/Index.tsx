import { SidebarProvider } from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArtCard } from "@/components/ArtCard";

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
        <main className="flex-1">
          {/* Hero Section */}
          <section className="h-screen w-full flex flex-col justify-between p-8 relative container mx-auto mt-16 md:mt-20 lg:mt-24">
            {/* Header Info */}
            <div className="flex justify-between items-start w-full text-sm text-gray-600 dark:text-gray-400">
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
                className="text-[8vw] leading-none tracking-tighter font-bold font-mono"
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
                className="w-full max-w-md mx-auto mt-8"
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
                <span className="text-gray-600 dark:text-gray-400 font-mono">
                  I create algorithmic art and
                  <br />
                  generative experiences
                </span>
              </motion.div>
              <motion.h2 
                className="text-[15vw] leading-none tracking-tighter font-bold font-mono"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                ZEKE.
              </motion.h2>
            </div>
          </section>

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

          {/* Gallery Section */}
          <section id="gallery" className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-mono text-2xl md:text-3xl mb-12 text-black dark:text-white tracking-tight"
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
            className="max-w-2xl mb-20 bg-white dark:bg-gray-900 border-2 border-black dark:border-white p-6 md:p-12 relative mx-4 md:mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-20 h-1 bg-black dark:bg-white" />
            <h2 className="font-mono text-2xl md:text-3xl mb-6 text-black dark:text-white tracking-tight">About</h2>
            <p className="font-mono text-base md:text-lg leading-relaxed text-black dark:text-white">
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
            <h2 className="font-mono text-2xl md:text-3xl mb-6 text-black dark:text-white tracking-tight">Contact</h2>
            <p className="font-mono text-base md:text-lg mb-4 text-black dark:text-white">
              Interested in collaborating or purchasing a piece? Get in touch:
            </p>
            <motion.a 
              href="mailto:zeke@example.com" 
              className="inline-block font-mono border-b-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-black dark:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              zeke@example.com
            </motion.a>
          </motion.section>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
