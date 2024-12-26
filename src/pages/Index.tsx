import { SidebarProvider } from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { HeroSection } from "@/components/HeroSection";
import { GallerySection } from "@/components/GallerySection";
import { AboutContactSection } from "@/components/AboutContactSection";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-white dark:bg-black">
        <main className="flex-1">
          <HeroSection />
          <GallerySection />
          <AboutContactSection />

          <motion.div 
            className="fixed bottom-8 right-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12"
              onClick={() => document.documentElement.classList.toggle('dark')}
            >
              <span className="sr-only">Toggle theme</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </Button>
          </motion.div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;