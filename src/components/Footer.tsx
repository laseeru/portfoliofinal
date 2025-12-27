import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground">Abdul-Rashid Dasana Abdulai</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Medical Student • AI in Healthcare Researcher
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="mailto:blaseeru@gmail.com"
              className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/blaseeru/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/laseeru"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abdul-Rashid Dasana Abdulai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
