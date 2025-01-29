import { motion } from "framer-motion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
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

  const blocsWorks = blocsImages.map((image) => ({
    title: "BLOCS",
    image,
    description: "A generative art project exploring geometric abstraction through digital means. Each piece demonstrates a careful balance of form, color, and space.",
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

      <Drawer open={openWavy} onOpenChange={setOpenWavy}>
        <DrawerContent className="h-full w-[90vw] sm:w-[45vw] bg-black border-r border-[#333333]">
          <DrawerHeader className="border-b border-[#333333]">
            <DrawerTitle className="text-[#ea384c] text-2xl">WAVY DRAMA</DrawerTitle>
          </DrawerHeader>
          <div className="p-6">
            <p className="text-white/80 text-lg">Coming soon...</p>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}