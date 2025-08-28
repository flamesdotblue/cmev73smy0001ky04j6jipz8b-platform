import React from 'react';
import { Github, Twitter, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Apex Velocity. Unofficial fan experience.</p>
          </div>
          <div className="flex items-center gap-4 text-zinc-300">
            <a href="#" className="hover:text-white transition" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
