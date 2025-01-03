import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function ArtworkSlideshow() {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate('/works')}
      className="flex items-center gap-4 group cursor-pointer"
    >
      <h2 className="text-4xl font-bold text-white group-hover:underline">
        EXPLORE WORKS
      </h2>
      <ArrowRight className="w-8 h-8 text-white transition-transform group-hover:translate-x-2" />
    </div>
  );
}