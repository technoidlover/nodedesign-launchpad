import { motion } from "framer-motion";
import { Code2, Layers, Rocket, Cpu } from "lucide-react";

const services = [
  { icon: Code2, title: "Custom Development", desc: "Full-stack apps built with modern frameworks. React, Node, Python, Go — we speak them all." },
  { icon: Layers, title: "Product Design", desc: "UX research, wireframes, and pixel-perfect interfaces that users actually enjoy using." },
  { icon: Rocket, title: "MVP Launch", desc: "From concept to deployed product in weeks, not months. Built to scale from day one." },
  { icon: Cpu, title: "AI & Automation", desc: "Machine learning integrations, intelligent workflows, and data pipelines that save hours." },
];

const ServicesSection = () => (
  <section id="services" className="px-6 md:px-12 py-24 md:py-32">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          What we <span className="text-primary">do</span>
        </h2>
        <p className="text-muted-foreground max-w-sm">Four pillars. One obsession: shipping software that works.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 md:p-10 bg-card border border-border rounded-sm hover:border-primary/40 transition-colors duration-500"
          >
            <s.icon className="w-6 h-6 text-primary mb-6" />
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
