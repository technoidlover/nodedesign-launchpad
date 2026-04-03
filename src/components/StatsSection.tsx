import { motion } from "framer-motion";

const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "40+", label: "Engineers on call" },
  { value: "98%", label: "Client retention" },
  { value: "<24h", label: "Response time" },
];

const StatsSection = () => (
  <section className="px-6 md:px-12 py-20 border-t border-border">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center"
        >
          <p className="text-4xl md:text-5xl font-bold text-primary font-display text-glow">{s.value}</p>
          <p className="text-muted-foreground text-sm mt-2">{s.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsSection;
