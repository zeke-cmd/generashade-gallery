import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
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
      <div className="min-h-screen flex w-full bg-white">
        <AppSidebar />
        <main className="flex-1 p-8">
          <SidebarTrigger className="mb-8" />
          
          {/* Greeting Section with Brutalist Design */}
          <section className="min-h-[50vh] flex flex-col justify-center mb-20 relative">
            <div className="absolute inset-0 bg-[#f3f3f3] -skew-y-3 transform origin-left"></div>
            <div className="relative z-10">
              <h1 className="font-mono text-[12vw] md:text-[8vw] font-light mb-4 text-black tracking-tighter leading-none">
                ZEKE
              </h1>
              <p className="font-mono text-xl text-black tracking-tight border-l-4 border-black pl-4">
                Abstract Generative Artist
              </p>
            </div>
          </section>

          {/* Hero Section */}
          <section className="min-h-[50vh] flex flex-col justify-center mb-20 bg-white border-2 border-black p-12 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-black"></div>
            <h2 className="font-mono text-6xl md:text-8xl font-light mb-6 text-black tracking-tighter">
              Generative
              <br />
              Art Gallery
            </h2>
            <p className="font-mono text-xl md:text-2xl text-black max-w-xl border-l-4 border-black pl-4">
              Exploring the intersection of code and creativity through algorithmic art.
            </p>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="mb-20">
            <h2 className="font-mono text-3xl mb-12 text-black tracking-tight">Featured Works</h2>
            <div className="art-grid">
              {artworks.map((artwork, index) => (
                <div key={artwork.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ArtCard {...artwork} />
                </div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="max-w-2xl mb-20 bg-white border-2 border-black p-12 relative">
            <div className="absolute top-0 left-0 w-20 h-1 bg-black"></div>
            <h2 className="font-mono text-3xl mb-6 text-black tracking-tight">About</h2>
            <p className="font-mono text-lg leading-relaxed text-black">
              As a developer with an artist's heart, I blend the precision of code with the freedom of creative expression. 
              My work explores the beautiful intersection of technology and art, creating abstract generative pieces that 
              challenge the boundaries between human creativity and computational aesthetics.
            </p>
          </section>

          {/* Contact Section */}
          <section id="contact" className="max-w-2xl mb-20">
            <h2 className="font-mono text-3xl mb-6 text-black tracking-tight">Contact</h2>
            <p className="font-mono text-lg mb-4 text-black">
              Interested in collaborating or purchasing a piece? Get in touch:
            </p>
            <a 
              href="mailto:zeke@example.com" 
              className="inline-block font-mono border-b-2 border-black hover:bg-black hover:text-white transition-colors text-black"
            >
              zeke@example.com
            </a>
          </section>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;