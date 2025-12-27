import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "About", path: "#about" },
  { name: "MedEstudia", path: "#featured" },
  { name: "Projects", path: "#projects" },
  { name: "Certifications", path: "#certifications" },
  { name: "Awards", path: "#awards" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (path.startsWith("#")) {
      const element = document.getElementById(path.substring(1));
      if (location.pathname === "/") {
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(path.substring(1));
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-lg font-semibold text-foreground tracking-tight" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ARDA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground accent-underline"
              >
                {item.name}
              </a>
            ))}
            <Button asChild variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="https://drive.google.com/file/d/13fBPe2it9Lrn4u2nKoxXb3pPaEa0-xSB/view" target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in bg-background">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="block py-3 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
             <a
                href="https://drive.google.com/file/d/13fBPe2it9Lrn4u2nKoxXb3pPaEa0-xSB/view"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 text-sm font-medium transition-colors text-accent hover:text-accent/80"
              >
                Download CV
              </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
