import { useState } from "react";

interface ArtCardProps {
  title: string;
  image: string;
  description: string;
}

export function ArtCard({ title, image, description }: ArtCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden bg-black border border-white/20 aspect-square"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-all duration-500 hover:scale-105" 
      />
      <div
        className={`absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-end p-6 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="font-sans text-white text-xl mb-2">{title}</h3>
        <p className="font-sans text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
}