"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Smartphone, Sparkles, Layout } from "lucide-react";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  } as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  } as const;

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-sans overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full flex items-center justify-between px-6 py-4 border-b border-white/5 backdrop-blur-xl z-50"
      >
        <div className="font-bold text-2xl tracking-tighter">SHAPR.</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>
        <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform active:scale-95">
          Get Started
        </button>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-8 text-purple-200 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Introducing the new standard in design</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1] bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent">
            Shape your <br className="hidden md:block"/> digital presence.
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
            Build beautiful, fast, and highly converting landing pages in minutes. No coding required, just pure creativity unleashed.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors hover:scale-105 active:scale-95">
              Start for free <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 rounded-full font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm">
              Book a demo
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Grid Features Section */}
      <section id="features" className="py-32 px-6 max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Everything you need.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Packed with powerful features to supercharge your workflow and captivate your audience.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Features here */}
          <motion.div variants={fadeUp} className="md:col-span-2 bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 p-10 rounded-[2rem] hover:border-white/20 transition-colors group relative overflow-hidden flex flex-col justify-end min-h-[380px]">
            <div className="absolute top-10 right-10 bg-white/10 p-4 rounded-full text-white group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-semibold mb-3">Lightning Fast Performance</h3>
            <p className="text-gray-400 text-lg max-w-md">Optimized for speed and performance right out of the box.</p>
          </motion.div>
          
          <motion.div variants={fadeUp} className="bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] hover:bg-white/[0.05] transition-colors group flex flex-col justify-end min-h-[380px]">
            <Shield className="w-10 h-10 text-purple-400 mb-6 group-hover:-translate-y-2 transition-transform" />
            <h3 className="text-2xl font-semibold mb-3">Enterprise Security</h3>
            <p className="text-gray-400">Bank-grade security protocols built directly into the core.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] hover:bg-white/[0.05] transition-colors group flex flex-col justify-end min-h-[380px]">
            <Smartphone className="w-10 h-10 text-blue-400 mb-6 group-hover:-translate-y-2 transition-transform" />
            <h3 className="text-2xl font-semibold mb-3">Fully Responsive</h3>
            <p className="text-gray-400">Looks absolutely perfect on any device, screen, or resolution.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-2 relative overflow-hidden bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-transparent border border-white/10 p-10 rounded-[2rem] hover:border-white/30 transition-all group flex flex-col justify-end min-h-[380px]">
            <Layout className="w-12 h-12 text-white mb-6 relative z-10 group-hover:scale-110 transition-transform" />
            <h3 className="text-3xl font-semibold mb-3 relative z-10">Beautiful Layouts</h3>
            <p className="text-gray-300 text-lg max-w-md relative z-10">Drag, drop, and customize stunning layouts with our intuitive visual editor.</p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
