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
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <SidebarTrigger className="mb-8" />
          
          {/* Hero Section */}
          <section className="min-h-[80vh] flex flex-col justify-center mb-20">
            <h1 className="font-sans text-6xl md:text-8xl font-light mb-6 animate-fade-up">
              Generative
              <br />
              Art Gallery
            </h1>
            <p className="font-serif text-xl md:text-2xl text-gray-600 max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Exploring the intersection of code and creativity through algorithmic art.
            </p>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="mb-20">
            <h2 className="font-sans text-3xl mb-12">Featured Works</h2>
            <div className="art-grid">
              {artworks.map((artwork, index) => (
                <div key={artwork.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ArtCard {...artwork} />
                </div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="max-w-2xl mb-20">
            <h2 className="font-sans text-3xl mb-6">About</h2>
            <p className="font-serif text-lg leading-relaxed">
              This gallery showcases a collection of generative artworks created through 
              algorithmic processes and creative coding. Each piece represents an exploration 
              of the boundaries between human creativity and computational aesthetics.
            </p>
          </section>

          {/* Contact Section */}
          <section id="contact" className="max-w-2xl mb-20">
            <h2 className="font-sans text-3xl mb-6">Contact</h2>
            <p className="font-serif text-lg mb-4">
              Interested in collaborating or purchasing a piece? Get in touch:
            </p>
            <a href="mailto:contact@example.com" className="inline-block border-b-2 border-black hover:opacity-70 transition-opacity">
              contact@example.com
            </a>
          </section>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;