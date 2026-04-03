import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-16 overflow-hidden">
    {/* Grid bg */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
      backgroundSize: '60px 60px'
    }} />

    <div className="relative z-10 max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-6">
          Outsource Software Company
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold leading-[0.9] tracking-tight mb-8">
          We build
          <br />
          <span className="text-primary text-glow">software</span> that
          <br />
          <span className="italic font-normal text-muted-foreground">doesn't need</span>
          <br />
          a redesign<span className="text-primary">.</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-12"
      >
        <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
          Engineering teams, on demand. We ship production-grade code for startups and enterprises who refuse to compromise.
        </p>
        <a
          href="#services"
          className="group flex items-center gap-3 px-8 py-4 border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-glow"
        >
          Explore services
          <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </div>

    {/* Floating accent */}
    <motion.div
      className="absolute -right-32 top-1/3 w-64 h-64 rounded-full bg-primary/10 blur-[100px]"
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 6, repeat: Infinity }}
    />
  </section>
);

export default HeroSection;
