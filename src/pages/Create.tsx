import { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

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
      // Extract setup and draw functions using regex
      const setupMatch = code.match(/function setup\(\) {([\s\S]*?)}/);
      const drawMatch = code.match(/function draw\(\) {([\s\S]*?)}/);
      
      // Create setup function
      const setupBody = setupMatch ? setupMatch[1] : '';
      (window as any).setup = new Function(`
        try {
          ${setupBody}
        } catch (error) {
          console.error('Error in setup:', error);
        }
      `);

      // Create draw function
      const drawBody = drawMatch ? drawMatch[1] : '';
      (window as any).draw = new Function(`
        try {
          ${drawBody}
        } catch (error) {
          console.error('Error in draw:', error);
        }
      `);

      p.setup = () => {
        try {
          const canvas = p.createCanvas(800, 800);
          canvas.parent(sketchRef.current!);
          p.background(0);
          if ((window as any).setup) {
            (window as any).setup();
          }
        } catch (error) {
          console.error('Error in p5 setup:', error);
        }
      };

      p.draw = () => {
        try {
          if ((window as any).draw) {
            (window as any).draw();
          }
        } catch (error) {
          console.error('Error in p5 draw:', error);
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
      try {
        p5Instance.current = new p5(sketch);
      } catch (error) {
        console.error('Error creating p5 instance:', error);
      }
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
    <div className="h-screen w-full bg-background">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Code Editor</h2>
              <Button onClick={regenerate} size="sm">
                Run Code
              </Button>
            </div>
            <div className="flex-1 p-4">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full font-mono text-sm bg-background border rounded-md p-4 resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                spellCheck={false}
              />
            </div>
          </div>
        </ResizablePanel>
        
        <ResizableHandle />
        
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full flex flex-col">
            <div className="flex items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Preview</h2>
            </div>
            <div className="flex-1 p-4 flex items-center justify-center bg-black/5">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-card rounded-lg overflow-hidden shadow-xl"
              >
                <div ref={sketchRef} />
              </motion.div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Create;