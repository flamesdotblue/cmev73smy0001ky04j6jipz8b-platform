import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight } from 'lucide-react';

function Hero() {
  const [interactive, setInteractive] = React.useState(false);

  return (
    <section className="relative pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0">
          <iframe
            title="Spline Two Cars Racing"
            src="https://my.spline.design/carracemercedesbenzgle-1HJ3QzU4MqgigmM4wGQ77Yvn/"
            className={`h-full w-full ${interactive ? '' : 'pointer-events-none'}`}
            allow="autoplay; fullscreen; xr-spatial-tracking"
            frameBorder="0"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-24 sm:py-32 lg:py-40">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight"
          >
            Feel the downforce.
            <span className="block bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent">Two cars. One apex.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-2xl text-zinc-200/90 text-lg"
          >
            Experience a wild F1 landing built for speed. Watch the duel, hear the turbo, and get closer to the grid than ever before.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => setInteractive(true)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 hover:bg-red-500 active:bg-red-700 px-6 py-3 font-semibold text-white shadow-lg shadow-red-600/30 transition"
            >
              <Play className="h-5 w-5" /> Play Animation
            </button>
            <a
              href="#features"
              className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 font-semibold text-white transition"
            >
              Explore Features
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-300/80">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" /> Live demo
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500" /> V12 vibes
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none select-none absolute -z-10 inset-0 opacity-40 mix-blend-screen" aria-hidden>
        <div className="absolute left-0 right-0 top-[55%] h-1 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-sm" />
        <div className="absolute left-0 right-0 top-[55%] h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
      </div>
    </section>
  );
}

export default Hero;
