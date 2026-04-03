const Footer = () => (
  <footer className="px-6 md:px-12 py-8 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© 2026 NoDesign. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
        <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
      </div>
    </div>
  </footer>
);

export default Footer;
