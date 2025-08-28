import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Zap, Trophy, Radio } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'Brutal Pace',
    desc: 'Sub-1.9s launches and neck-snapping Gs. You bring the reflexes, we bring the grip.'
  },
  {
    icon: Zap,
    title: 'ERS Ignition',
    desc: 'Deploy electric boost on the straights. More volts, more victory.'
  },
  {
    icon: Trophy,
    title: 'Podium DNA',
    desc: 'Crafted for winners with aero that slices air and brakes that melt lap times.'
  },
  {
    icon: Radio,
    title: 'Team Radio',
    desc: 'Strategy calls, box-box moments, and undercuts. Hear the race unfold in real time.'
  }
];

function FeatureCard({ icon: Icon, title, desc, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: 0.05 * i }}
      className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-red-600/20 hover:border-red-500/30 transition"
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-red-600/20 blur-2xl" />
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 border border-white/10">
          <Icon className="h-6 w-6 text-red-400" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-zinc-300/90">{desc}</p>
    </motion.div>
  );
}

function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-red-400 font-semibold tracking-widest uppercase text-xs"
          >
            Built for Speed
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-2 text-3xl sm:text-4xl font-extrabold"
          >
            What makes it crazy and cool
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-3 max-w-2xl text-zinc-300/90"
          >
            A razor-sharp aesthetic, motion that bites, and immersive 3D racing right on the page.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, idx) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} i={idx} />
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-white/10 overflow-hidden">
          <div className="relative">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_40%,transparent_60%)]" />
            <div className="px-6 py-6 sm:px-10 sm:py-8 bg-zinc-900/50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">Ready to take pole?</h3>
                  <p className="text-sm text-zinc-300/90">Join the grid and get early access to new circuits, drops, and VIP paddock content.</p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <input type="email" placeholder="you@fastmail.com" className="flex-1 sm:w-64 rounded-md bg-black/40 border border-white/15 px-3 py-2 text-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500/60" />
                  <button className="rounded-md bg-red-600 hover:bg-red-500 active:bg-red-700 px-4 py-2 text-sm font-semibold shadow-lg shadow-red-600/30">Launch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-10 h-40 -bottom-10 bg-[radial-gradient(600px_120px_at_center,rgba(255,0,0,0.25),transparent_60%)]" />
    </section>
  );
}

export default Features;
