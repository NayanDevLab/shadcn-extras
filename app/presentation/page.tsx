'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Sparkles, Wand2, MonitorPlay, Terminal, BookOpen, Blocks, Zap, Image as ImageIcon, MousePointerClick, LayoutDashboard, Layers, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';

import { CircularGallery } from '@/components/core/circular-gallery';
import { RocketIcon } from '@/components/core/rocket-icon';
import { KpiCard } from '@/components/core/kpi-card';
import { HolographicCard } from '@/components/core/holographic-card';

const galleryItems = [
  { id: '1', title: 'Image 1', imageSrc: 'https://picsum.photos/id/27/600/600' },
  { id: '2', title: 'Image 2', imageSrc: 'https://picsum.photos/id/25/600/600' },
  { id: '3', title: 'Image 3', imageSrc: 'https://picsum.photos/id/372/600/600' },
  { id: '4', title: 'Image 4', imageSrc: 'https://picsum.photos/id/380/600/600' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function PresentationPage() {
  return (
    <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-blue-500/30">
      
      {/* SLIDE 1: TITLE */}
      <section className="relative flex h-screen w-full snap-start flex-col items-center justify-center p-10 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent dark:from-blue-900/20" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={staggerContainer}
          className="z-10 max-w-4xl space-y-6 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="flex h-20 w-20 items-center justify-center rounded-2xl bg-black text-white shadow-2xl dark:bg-white dark:text-black hover:rotate-12 transition-transform cursor-pointer">
            <Sparkles className="h-10 w-10" />
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-6xl font-extrabold tracking-tight md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-zinc-100 dark:to-zinc-500">
            Shadcn Extras
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="mx-auto max-w-2xl text-xl text-zinc-600 dark:text-zinc-400 md:text-3xl leading-relaxed">
            A premium collection of beautifully crafted, highly animated React components.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="pt-12 animate-bounce text-zinc-400">
            <span className="text-sm font-semibold uppercase tracking-widest">Scroll Down</span>
          </motion.div>
        </motion.div>
      </section>

      {/* SLIDE 2: WHAT IS IT & USE CASES */}
      <section className="flex h-screen w-full snap-start flex-col justify-center p-10 md:p-24 bg-transparent">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-12 w-full"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 text-blue-600 dark:text-blue-400">
            <Wand2 className="h-8 w-8" />
            <h2 className="text-3xl font-semibold uppercase tracking-wider">What is it?</h2>
          </motion.div>
          
          <motion.h3 variants={fadeInUp} className="text-5xl font-bold md:text-6xl leading-tight max-w-4xl">
            Like Shadcn UI, but with extra magic and advanced animations.
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            <motion.p variants={fadeInUp} className="text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We took the core philosophy of Shadcn UI—beautiful, accessible, copy-paste code—and expanded it to include complex, highly interactive components that normally take weeks to build.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="space-y-6">
              <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Perfect Use Cases:</h4>
              <ul className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-3"><Blocks className="h-5 w-5 text-blue-500" /> Stunning Landing Pages</li>
                <li className="flex items-center gap-3"><Blocks className="h-5 w-5 text-blue-500" /> Professional Developer Portfolios</li>
                <li className="flex items-center gap-3"><Blocks className="h-5 w-5 text-blue-500" /> Complex Interactive Dashboards</li>
                <li className="flex items-center gap-3"><Blocks className="h-5 w-5 text-blue-500" /> Premium SaaS Applications</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SLIDE 3: DEVELOPER BENEFITS */}
      <section className="flex h-screen w-full snap-start flex-col justify-center p-10 md:p-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-12 w-full"
        >
          <motion.h2 variants={fadeInUp} className="text-5xl font-bold md:text-6xl">Real Developer Benefits</motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <motion.div variants={fadeInUp} className="space-y-4 bg-zinc-50 dark:bg-zinc-900/80 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 transition-colors">
              <div className="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Zap className="h-6 w-6" />
              </div>
              <h4 className="text-2xl font-bold">Save Massive Time</h4>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Don't waste hours writing complex CSS Grids or Framer Motion timelines from scratch. The hard work is already done.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="space-y-4 bg-zinc-50 dark:bg-zinc-900/80 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 transition-colors">
              <div className="h-14 w-14 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Code2 className="h-6 w-6" />
              </div>
              <h4 className="text-2xl font-bold">You Own The Code</h4>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                No npm blackboxes or vendor lock-in. You get the raw React source code. Customize the styling and logic exactly how you want.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4 bg-zinc-50 dark:bg-zinc-900/80 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500 transition-colors">
              <div className="h-14 w-14 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Sparkles className="h-6 w-6" />
              </div>
              <h4 className="text-2xl font-bold">Premium Aesthetics</h4>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Instantly upgrade your website's look. Impress your clients and users with an agency-level experience out of the box.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SLIDE 4: WHAT IS INSIDE (CATEGORIES) */}
      <section className="flex h-screen w-full snap-start flex-col justify-center p-10 md:p-24 bg-transparent">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-12 w-full"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 text-pink-500">
              <Layers className="h-8 w-8" />
              <h2 className="text-3xl font-semibold uppercase tracking-wider">What's Inside?</h2>
            </motion.div>
            <motion.h3 variants={fadeInUp} className="text-5xl font-bold md:text-6xl">
              An expanding library of components
            </motion.h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <motion.div variants={fadeInUp} className="bg-white dark:bg-zinc-950 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col items-center text-center space-y-4 hover:shadow-xl transition-shadow">
              <ImageIcon className="h-12 w-12 text-blue-500" />
              <h4 className="text-2xl font-bold">3D Galleries</h4>
              <p className="text-zinc-600 dark:text-zinc-400">Infinite parallax galleries and circular swipers for stunning media displays.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white dark:bg-zinc-950 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col items-center text-center space-y-4 hover:shadow-xl transition-shadow">
              <MousePointerClick className="h-12 w-12 text-emerald-500" />
              <h4 className="text-2xl font-bold">Animated Icons</h4>
              <p className="text-zinc-600 dark:text-zinc-400">Micro-interactions on hover and click to make your UI feel alive and responsive.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white dark:bg-zinc-950 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col items-center text-center space-y-4 hover:shadow-xl transition-shadow">
              <LayoutDashboard className="h-12 w-12 text-orange-500" />
              <h4 className="text-2xl font-bold">Dashboard UI</h4>
              <p className="text-zinc-600 dark:text-zinc-400">Beautiful KPI cards, leaderboards, and data visualization elements.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white dark:bg-zinc-950 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col items-center text-center space-y-4 hover:shadow-xl transition-shadow">
              <Blocks className="h-12 w-12 text-purple-500" />
              <h4 className="text-2xl font-bold">Interactive Cards</h4>
              <p className="text-zinc-600 dark:text-zinc-400">Holographic cards, premium pricing tables, and elegant blog layouts.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SLIDE 5: EXAMPLES */}
      <section className="flex min-h-screen w-full snap-start flex-col justify-center p-10 md:p-24 bg-zinc-950 text-white overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto w-full space-y-8"
        >
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">See them in action</h2>
            <p className="text-xl text-zinc-400">Interact with the actual components right here.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[65vh]">
            
            {/* Circular Gallery */}
            <motion.div variants={fadeInUp} className="relative rounded-3xl overflow-hidden bg-[#101828] border border-zinc-800 group">
              <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium border border-zinc-700">3D Galleries</div>
              <div className="absolute inset-0 scale-[0.65] origin-center -translate-y-8">
                <CircularGallery items={galleryItems} title="Galleries" radius="30vmin" />
              </div>
            </motion.div>

            {/* Holographic Card */}
            <motion.div variants={fadeInUp} className="relative rounded-3xl overflow-hidden bg-black border border-zinc-800 flex items-center justify-center p-8">
              <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium border border-zinc-700">Interactive Cards</div>
              <div className="scale-75 origin-center">
                <HolographicCard
                  title="Hologram"
                  description="A beautiful 3D floating card effect."
                  buttonText="Hover Me"
                  buttonHref="#"
                />
              </div>
            </motion.div>

            {/* Animated Icons */}
            <motion.div variants={fadeInUp} className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center p-8 group">
              <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium border border-zinc-700">Animated Icons</div>
              <div className="cursor-pointer p-8 rounded-full bg-zinc-800/50 hover:bg-zinc-800 transition-colors">
                <RocketIcon size={64} className="text-orange-500" />
              </div>
              <p className="mt-4 text-zinc-400 font-mono text-sm">Hover the icon</p>
            </motion.div>

            {/* Dashboard UI */}
            <motion.div variants={fadeInUp} className="relative rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 flex items-center justify-center p-8">
              <div className="absolute top-4 left-4 z-10 bg-white/50 dark:bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium border border-zinc-200 dark:border-zinc-700 text-black dark:text-white">Dashboard UI</div>
              <div className="w-full max-w-sm">
                <KpiCard
                  label='Weekly Sessions'
                  value={14209}
                  delta={340}
                  trend='up'
                  caption='vs Last Week'
                  tone='primary'
                  icon={<PieChart className='h-4 w-4 text-blue-600 dark:text-blue-400' />}
                />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* SLIDE 6: INSTALLATION */}
      <section className="flex h-screen w-full snap-start flex-col justify-center p-10 md:p-24 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 text-orange-500">
              <Terminal className="h-8 w-8" />
              <h2 className="text-3xl font-semibold uppercase tracking-wider">Installation</h2>
            </motion.div>
            
            <motion.h3 variants={fadeInUp} className="text-5xl font-bold md:text-6xl leading-tight">
              One command setup.
            </motion.h3>
            
            <motion.p variants={fadeInUp} className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We provide a custom CLI tool. Just run the command, and it automatically downloads the component, its styles, and installs any missing dependencies like Framer Motion directly into your project.
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="rounded-2xl bg-zinc-900 p-8 text-zinc-300 font-mono text-lg shadow-2xl dark:bg-black border border-zinc-800 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500" />
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <p className="opacity-70 text-sm mb-2"># Install a component easily</p>
            <p className="text-orange-400">
              npx <span className="text-white">shadcn-extras@latest</span> add <span className="text-blue-400">animated-image-grid</span>
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SLIDE 7: STORYBOOK */}
      <section className="flex h-screen w-full snap-start flex-col justify-center p-10 md:p-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
           <motion.div variants={fadeInUp} className="order-2 md:order-1 rounded-2xl bg-zinc-100 p-2 shadow-2xl dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-6 aspect-video flex flex-col justify-center items-center gap-4">
              <BookOpen className="h-16 w-16 text-pink-500" />
              <p className="font-mono text-lg font-bold">npm run storybook</p>
            </div>
          </motion.div>

          <div className="space-y-8 order-1 md:order-2">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 text-pink-500">
              <BookOpen className="h-8 w-8" />
              <h2 className="text-3xl font-semibold uppercase tracking-wider">Playground</h2>
            </motion.div>
            
            <motion.h3 variants={fadeInUp} className="text-5xl font-bold md:text-6xl leading-tight">
              Interactive Storybook
            </motion.h3>
            
            <motion.p variants={fadeInUp} className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We included a complete Storybook environment. Before you install anything, you can run Storybook locally to preview components in isolation, test different variants, and see exactly how they respond to props.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* SLIDE 8: OUTRO */}
      <section className="relative flex h-screen w-full snap-start flex-col items-center justify-center p-10 text-center bg-gradient-to-t from-indigo-950 via-zinc-900 to-black text-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={staggerContainer}
          className="z-10 max-w-4xl space-y-8 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp}>
            <MonitorPlay className="h-20 w-20 text-blue-400 mb-4" />
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-5xl font-bold md:text-7xl">
            Let's build something amazing.
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-2xl text-zinc-400 max-w-2xl">
            Thank you for checking out the project. I hope Shadcn Extras helps developers build beautiful, modern websites faster.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="pt-8">
            <Link href="/docs">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xl font-bold text-black transition-transform hover:scale-105 active:scale-95">
                View the Docs <ArrowRight className="h-6 w-6" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
