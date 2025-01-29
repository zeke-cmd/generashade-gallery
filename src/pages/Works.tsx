import { motion } from "framer-motion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { useState } from "react";
import { WorkSlider } from "@/components/WorkSlider";

export default function Works() {
  const [openBlocs, setOpenBlocs] = useState(false);
  const [openWavy, setOpenWavy] = useState(false);

  const blocsImages = [
    "/lovable-uploads/e1a485cb-9d35-40dd-9f45-2a035598d251.png",
    "/lovable-uploads/a3e6744f-2bd2-4404-be2d-c43520759e96.png",
    "/lovable-uploads/a72fddef-493c-481b-a597-6da2e9058fb8.png"
  ];

  const wavyImages = [
    "/lovable-uploads/4545907c-41da-4de2-8574-f7d574c10c70.png",
    "/lovable-uploads/276d3922-3972-4860-a7ea-2d90eb3ff5e2.png",
    "/lovable-uploads/0280c325-09ae-4934-8866-b2b06727360c.png"
  ];

  const blocsWorks = [
    {
      title: "Geometric Harmony",
      image: blocsImages[0],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In this piece, the geometric forms create a harmonious balance between positive and negative space. The stark contrast between shapes evokes a sense of architectural precision while maintaining an organic flow. Through careful composition, each element contributes to a larger narrative about structure and form in modern digital art."
    },
    {
      title: "Digital Tessellation",
      image: blocsImages[1],
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This work explores the intersection of mathematical precision and artistic expression. The repeating patterns create a rhythmic visual experience, while the careful color selection adds depth and dimension to the geometric forms. Each block becomes part of a larger tapestry of digital abstraction."
    },
    {
      title: "Cubic Perspectives",
      image: blocsImages[2],
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. The interplay of light and shadow in this piece creates an illusion of depth within the two-dimensional space. The geometric forms seem to float and interact, creating a dynamic composition that challenges traditional perspectives. Each element has been carefully positioned to maximize visual impact while maintaining compositional balance."
    }
  ];

  const wavyWorks = [
    {
      title: "Fluid Resonance",
      image: wavyImages[0],
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. This piece captures the essence of fluid dynamics through digital manipulation. The undulating forms create a sense of movement and rhythm, while the carefully selected color palette enhances the emotional impact of the composition. Each wave tells its own story within the larger narrative of motion and transformation."
    },
    {
      title: "Chromatic Waves",
      image: wavyImages[1],
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The interplay of color and form in this work creates a mesmerizing visual experience. The flowing lines and gradients suggest natural phenomena while maintaining a distinctly digital aesthetic. The piece invites viewers to lose themselves in its rhythmic patterns and harmonious color transitions."
    },
    {
      title: "Ethereal Currents",
      image: wavyImages[2],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This work explores the boundaries between chaos and order through fluid digital forms. The dynamic composition suggests movement and energy while maintaining a sense of balance and harmony. Each curve and color transition has been carefully crafted to create a cohesive visual experience."
    }
  ];

  return (
    <div className="min-h-screen bg-black px-8 py-12">
      <Breadcrumb className="mb-12">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-white hover:text-[#ea384c]">
              <Home className="h-4 w-4" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#ea384c]">Works</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-[15vw] font-bold text-[#ea384c] tracking-tighter leading-none mb-20"
      >
        WORKS.
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left"
        >
          <div 
            onClick={() => setOpenBlocs(true)}
            className="text-white text-4xl font-light border-t border-[#333333] py-8 hover:text-[#ea384c] transition-colors cursor-pointer"
          >
            BLOCS →
          </div>
          <div 
            onClick={() => setOpenWavy(true)}
            className="text-white text-4xl font-light border-t border-[#333333] py-8 hover:text-[#ea384c] transition-colors cursor-pointer"
          >
            WAVY DRAMA →
          </div>
        </motion.div>
      </motion.div>

      <WorkSlider
        isOpen={openBlocs}
        onClose={() => setOpenBlocs(false)}
        works={blocsWorks}
      />

      <WorkSlider
        isOpen={openWavy}
        onClose={() => setOpenWavy(false)}
        works={wavyWorks}
      />
    </div>
  );
}