import { useEffect, useRef } from "react";
import p5 from "p5";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const Create = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    // Define the sketch
    const sketch = (p: p5) => {
      p.setup = () => {
        const canvas = p.createCanvas(800, 800);
        canvas.parent(sketchRef.current!);
        p.background(0);
        p.noLoop();
      };

      p.draw = () => {
        p.stroke(255);
        p.strokeWeight(2);
        
        // Create a grid of points
        const spacing = 40;
        for (let x = spacing; x < p.width - spacing; x += spacing) {
          for (let y = spacing; y < p.height - spacing; y += spacing) {
            // Add some randomness to each point's position
            const offsetX = p.random(-20, 20);
            const offsetY = p.random(-20, 20);
            
            // Draw lines connecting nearby points
            if (p.random(1) > 0.5) {
              p.line(x + offsetX, y + offsetY, 
                     x + spacing + p.random(-20, 20), 
                     y + p.random(-20, 20));
            }
          }
        }
      };
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
  }, []);

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
          
          <div className="max-w-4xl mx-auto">
            <h1 className="font-sans text-4xl mb-8">Create Generative Art</h1>
            
            <div className="mb-6">
              <Button onClick={regenerate} className="mr-4">
                Regenerate Artwork
              </Button>
            </div>

            <div 
              ref={sketchRef} 
              className="bg-card rounded-lg overflow-hidden shadow-xl"
            />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Create;