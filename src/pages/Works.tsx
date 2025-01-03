import { motion } from "framer-motion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

export default function Works() {
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
          <div className="text-white text-4xl font-light border-t border-[#333333] py-8 hover:text-[#ea384c] transition-colors cursor-pointer">
            BLOCS →
          </div>
          <div className="text-white text-4xl font-light border-t border-[#333333] py-8 hover:text-[#ea384c] transition-colors cursor-pointer">
            WAVY DRAMA →
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}