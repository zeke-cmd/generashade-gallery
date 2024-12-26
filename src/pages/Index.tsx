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
          <section className="min-h-screen w-full flex flex-col justify-between p-6 relative">
            {/* Header Info with reduced margin */}
            <div className="flex justify-between items-start w-full text-sm text-gray-600 dark:text-gray-400 mb-8">
              <span>Currently exploring generative art</span>
              <span>Based in Digital Space</span>
              <span>Work, About, Contact</span>
            </div>

            {/* Main Title */}
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
              
              {/* Random Image with adjusted size */}
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

            {/* Bottom Section */}
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
          <section id="gallery" className="mb-20 px-6">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[4vw] md:text-[3vw] leading-tight tracking-tighter font-bold mb-12"
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
            </motion.div>
          </section>

          {/* About Section */}
          <motion.section 
            id="about" 
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

          {/* Contact Section */}
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

        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;