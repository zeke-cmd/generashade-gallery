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
      <div className="min-h-screen flex w-full bg-tertiary">
        <AppSidebar />
        <main className="flex-1 p-8">
          <SidebarTrigger className="mb-8" />
          
          {/* Greeting Section */}
          <section className="min-h-[50vh] flex flex-col justify-center mb-20">
            <h1 className="font-sans text-7xl font-light mb-4 text-gray-800 animate-fade-up">
              ZEKE
            </h1>
            <p className="font-serif text-xl text-gray-600 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Abstract Generative Artist
            </p>
          </section>

          {/* Hero Section */}
          <section className="min-h-[50vh] flex flex-col justify-center mb-20 bg-primary rounded-lg p-12">
            <h2 className="font-sans text-6xl md:text-8xl font-light mb-6 animate-fade-up text-gray-800">
              Generative
              <br />
              Art Gallery
            </h2>
            <p className="font-serif text-xl md:text-2xl text-gray-600 max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Exploring the intersection of code and creativity through algorithmic art.
            </p>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="mb-20">
            <h2 className="font-sans text-3xl mb-12 text-gray-800">Featured Works</h2>
            <div className="art-grid">
              {artworks.map((artwork, index) => (
                <div key={artwork.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ArtCard {...artwork} />
                </div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="max-w-2xl mb-20 bg-secondary p-12 rounded-lg">
            <h2 className="font-sans text-3xl mb-6 text-gray-800">About</h2>
            <p className="font-serif text-lg leading-relaxed text-gray-600">
              As a developer with an artist's heart, I blend the precision of code with the freedom of creative expression. 
              My work explores the beautiful intersection of technology and art, creating abstract generative pieces that 
              challenge the boundaries between human creativity and computational aesthetics.
            </p>
          </section>

          {/* Contact Section */}
          <section id="contact" className="max-w-2xl mb-20">
            <h2 className="font-sans text-3xl mb-6 text-gray-800">Contact</h2>
            <p className="font-serif text-lg mb-4 text-gray-600">
              Interested in collaborating or purchasing a piece? Get in touch:
            </p>
            <a 
              href="mailto:zeke@example.com" 
              className="inline-block border-b-2 border-gray-800 hover:opacity-70 transition-opacity text-gray-800"
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