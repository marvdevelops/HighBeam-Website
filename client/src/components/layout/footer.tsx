export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary clip-diagonal" />
            <span className="font-display font-bold text-xl tracking-tighter text-white">HighBeam</span>
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
