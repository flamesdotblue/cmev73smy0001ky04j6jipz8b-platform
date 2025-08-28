import React from 'react';
import { Flag, Menu, X } from 'lucide-react';

const NavLink = ({ children }) => (
  <a href="#" className="text-sm text-zinc-200/90 hover:text-white transition-colors">
    {children}
  </a>
);

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-red-600">
                <Flag className="h-5 w-5" />
              </div>
              <span className="font-semibold tracking-widest uppercase text-white">Apex Velocity</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <NavLink>Teams</NavLink>
              <NavLink>Schedule</NavLink>
              <NavLink>Circuits</NavLink>
              <NavLink>Tickets</NavLink>
              <a href="#" className="inline-flex items-center rounded-md bg-white text-black px-3 py-1.5 text-sm font-semibold hover:bg-zinc-200 transition-colors">Join the Grid</a>
            </nav>
            <button onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/20 text-white">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-4 py-3 space-y-3">
              <NavLink>Teams</NavLink>
              <NavLink>Schedule</NavLink>
              <NavLink>Circuits</NavLink>
              <NavLink>Tickets</NavLink>
              <a href="#" className="block text-center rounded-md bg-white text-black px-3 py-2 text-sm font-semibold hover:bg-zinc-200 transition-colors">Join the Grid</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
