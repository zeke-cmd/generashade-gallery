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
      className="art-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={title} className="transition-all duration-500" />
      <div
        className={`absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-end p-6 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="font-sans text-white text-xl mb-2">{title}</h3>
        <p className="font-serif text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
}