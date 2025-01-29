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

  const blocsWorks = blocsImages.map((image) => ({
    title: "BLOCS",
    image,
    description: "A generative art project exploring geometric abstraction through digital means. Each piece demonstrates a careful balance of form, color, and space.",
  }));

  const wavyWorks = wavyImages.map((image) => ({
    title: "WAVY DRAMA",
    image,
    description: "An exploration of fluid dynamics and color theory through digital art. This series captures the essence of movement and rhythm through undulating forms and carefully curated color palettes. Each piece tells a story of flow and transformation, where geometric precision meets organic motion.",
  }));

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