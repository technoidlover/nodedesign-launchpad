import { motion } from "framer-motion";

const Navbar = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-md border-b border-border"
  >
    <a href="/" className="font-display text-xl font-bold tracking-tight">
      no<span className="text-primary">design</span>
    </a>
    <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
      <a href="#services" className="hover:text-foreground transition-colors">Services</a>
      <a href="#process" className="hover:text-foreground transition-colors">Process</a>
      <a href="#work" className="hover:text-foreground transition-colors">Work</a>
      <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
    </div>
    <a
      href="#contact"
      className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
    >
      Let's talk
    </a>
  </motion.nav>
);

export default Navbar;
