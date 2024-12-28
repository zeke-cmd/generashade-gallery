import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export function About() {
  return (
    <div id="about" className="min-h-screen bg-black text-white py-20">
      <motion.section 
        className="max-w-4xl mb-20 mx-6 md:mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-20 h-1 bg-[#ea384c]" />
          <h2 className="text-[4vw] md:text-[3vw] leading-tight tracking-tighter font-bold mb-12 text-[#ea384c]">
            ABOUT
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl leading-relaxed">
                As a developer with an artist's heart, I blend the precision of code with the freedom of creative expression. 
                My work explores the beautiful intersection of technology and art, creating abstract generative pieces that 
                challenge the boundaries between human creativity and computational aesthetics.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <img 
                src="https://images.unsplash.com/photo-1550859492-d5da9d8e45f3"
                alt="Abstract Art"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="contact" 
        className="max-w-4xl mx-6 md:mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[4vw] md:text-[3vw] leading-tight tracking-tighter font-bold mb-12 text-[#ea384c]">
          CONTACT
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-lg md:text-xl mb-8">
              Interested in collaborating or purchasing a piece? Get in touch:
            </p>
            <div className="space-y-6">
              <motion.a 
                href="mailto:zeke@example.com"
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
              >
                <Mail className="w-6 h-6 text-[#ea384c]" />
                <span className="text-xl border-b border-transparent group-hover:border-white transition-all">
                  zeke@example.com
                </span>
              </motion.a>
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
              >
                <MapPin className="w-6 h-6 text-[#ea384c]" />
                <span className="text-xl">Digital Space</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
              >
                <MessageSquare className="w-6 h-6 text-[#ea384c]" />
                <span className="text-xl">Available for commissions</span>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <img 
              src="https://images.unsplash.com/photo-1550859492-d5da9d8e45f3"
              alt="Contact Visual"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}