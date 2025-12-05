import logoImage from "@assets/Logo@5x-100_1764948626323.jpg";

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img 
              src={logoImage} 
              alt="HighBeam" 
              className="h-8 w-auto object-contain mix-blend-screen invert hue-rotate-180" 
            />
          </div>
          
          <div className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} HighBeam Studio. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-primary transition-colors text-sm">Instagram</a>
            <a href="#" className="text-zinc-500 hover:text-primary transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-zinc-500 hover:text-primary transition-colors text-sm">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
