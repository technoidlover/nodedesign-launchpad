import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "We dissect your problem, map user journeys, and define the technical architecture." },
  { num: "02", title: "Sprint", desc: "Two-week cycles with daily standups. You see progress in real time, not after months." },
  { num: "03", title: "Ship", desc: "CI/CD pipelines, automated testing, and zero-downtime deploys. Production-ready, always." },
  { num: "04", title: "Iterate", desc: "Post-launch analytics, user feedback loops, and continuous improvement baked in." },
];

const ProcessSection = () => (
  <section id="process" className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold tracking-tight mb-16"
      >
        How it <span className="text-primary">works</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative"
          >
            <span className="text-6xl font-bold text-primary/10 font-display">{step.num}</span>
            <h3 className="text-lg font-semibold mt-2 mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
