import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const works = [
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

export default function Works() {
  return (
    <div className="min-h-screen bg-black px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-[15vw] font-bold text-[#ea384c] tracking-tighter leading-none"
      >
        FEATURED
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-[15vw] font-bold text-[#ea384c] tracking-tighter leading-none -mt-[4vw]"
      >
        WORKS.
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {works.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <img
                src={work.image}
                alt={work.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                  <p className="text-gray-200">{work.description}</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <span>View Project</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}