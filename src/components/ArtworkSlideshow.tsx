import { useState } from "react";
import { WorkSlider } from "./WorkSlider";

const artworks = [
  {
    title: "Digital Convergence",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    description: "An exploration of digital art and human interaction"
  },
  {
    title: "Neural Networks",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Visualizing the complexity of machine learning"
  },
  {
    title: "Circuit Poetry",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "The beauty of technology in abstract form"
  },
  {
    title: "Code Symphony",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Where programming meets artistic expression"
  }
];

export function ArtworkSlideshow() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-4 group cursor-pointer"
      >
        <h2 className="text-4xl font-bold text-white group-hover:underline">
          FEATURED WORKS
        </h2>
        <ArrowRight className="w-8 h-8 text-white transition-transform group-hover:translate-x-2" />
      </div>
      <WorkSlider 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        works={artworks}
      />
    </>
  );
}