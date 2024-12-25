import { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { motion } from "framer-motion";

const Create = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);
  const [code, setCode] = useState(`function setup() {
  createCanvas(800, 800);
  background(0);
  noLoop();
}

function draw() {
  stroke(255);
  strokeWeight(2);
  
  // Create a grid of points
  const spacing = 40;
  for (let x = spacing; x < width - spacing; x += spacing) {
    for (let y = spacing; y < height - spacing; y += spacing) {
      // Add some randomness to each point's position
      const offsetX = random(-20, 20);
      const offsetY = random(-20, 20);
      
      // Draw lines connecting nearby points
      if (random(1) > 0.5) {
        line(x + offsetX, y + offsetY, 
             x + spacing + random(-20, 20), 
             y + random(-20, 20));
      }
    }
  }
}`);

  useEffect(() => {
    // Define the sketch
    const sketch = (p: p5) => {
      // Create a function in global scope that p5.js can access
      (window as any).setup = new Function(
        code.match(/function setup\(\) {([\s\S]*?)}/)?.[1] || ""
      );
      (window as any).draw = new Function(
        code.match(/function draw\(\) {([\s\S]*?)}/)?.[1] || ""
      );

      p.setup = () => {
        const canvas = p.createCanvas(800, 800);
        canvas.parent(sketchRef.current!);
        p.background(0);
        if ((window as any).setup) {
          (window as any).setup();
        }
      };

      p.draw = () => {
        if ((window as any).draw) {
          (window as any).draw();
        }
      };

      // Add p5.js methods to global scope
      Object.keys(p).forEach((key) => {
        if (typeof p[key] === "function") {
          (window as any)[key] = p[key].bind(p);
        }
      });
    };

    // Create new p5 instance
    if (sketchRef.current && !p5Instance.current) {
      p5Instance.current = new p5(sketch);
    }

    // Cleanup
    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
        p5Instance.current = null;
      }
    };
  }, [code]);

  const regenerate = () => {
    if (p5Instance.current) {
      p5Instance.current.redraw();
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <SidebarTrigger className="mb-8" />
          
          <div className="max-w-6xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-4xl mb-8"
            >
              Create Generative Art
            </motion.h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="bg-black p-4 rounded-lg">
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-[600px] bg-black text-white font-mono p-4 focus:outline-none resize-none"
                  />
                </div>
                <Button onClick={regenerate} className="w-full">
                  Run Code
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card rounded-lg overflow-hidden shadow-xl"
              >
                <div ref={sketchRef} />
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Create;