import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@assets/Logo@5x-100_1764948626323.jpg";

const navItems = [
  { name: "Capabilities", href: "#capabilities" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "For Agencies", href: "#agencies" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group" onClick={(e) => scrollToSection(e, "#")}>
          <img src={logoImage} alt="HighBeam" className="h-12 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-medium text-zinc-400 hover:text-primary transition-colors uppercase tracking-widest"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button 
            className="bg-primary text-primary-foreground hover:bg-white hover:text-black font-bold rounded-none px-6 transition-transform hover:scale-105 active:scale-95"
            onClick={(e) => {
                const el = document.querySelector('#contact');
                el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start a Project
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-l border-zinc-800 w-full sm:w-[400px] p-0">
              <div className="flex flex-col h-full p-8 justify-center space-y-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-3xl font-display font-bold text-white hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <Button 
                    className="bg-primary text-primary-foreground hover:bg-white hover:text-black font-bold rounded-none w-full mt-8 py-6 text-lg"
                    onClick={() => {
                        setIsOpen(false);
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                  Start a Project
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
