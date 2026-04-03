import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Ready to <span className="text-primary text-glow">build</span>?
        </h2>
        <p className="text-muted-foreground max-w-lg mb-10 text-lg">
          Tell us about your project. We'll get back to you within 24 hours with a clear plan and timeline.
        </p>
        <a
          href="mailto:hello@nodesign.dev"
          className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity rounded-sm"
        >
          hello@nodesign.dev
          <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
