'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Blocks,
  BookOpen,
  Image as ImageIcon,
  Layers,
  MonitorPlay,
  Palette,
  Sparkles,
  Terminal,
  Wand2,
  Wrench,
} from 'lucide-react';
import { motion } from 'motion/react';

import { CircularGallery } from '@/components/core/circular-gallery';
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

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 text-sm md:text-base font-semibold text-zinc-500 dark:text-zinc-400">
            <span>25+ Components</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>11 Themes</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>14 Visual Tools</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span className="text-blue-500">AI Powered</span>
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-12 animate-bounce text-zinc-400">
            <span className="text-sm font-semibold uppercase tracking-widest">Scroll Down</span>
          </motion.div>
        </motion.div>
      </section>

      {/* SLIDE 2: THE PROBLEM & SOLUTION */}
      <section className="flex h-screen w-full snap-start flex-col justify-center p-10 md:p-24 bg-transparent">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-12 w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* The Problem */}
            <motion.div variants={fadeInUp} className="space-y-6 bg-red-50 dark:bg-red-950/20 p-8 rounded-3xl border border-red-100 dark:border-red-900/30">
              <div className="flex items-center gap-4 text-red-500">
                <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
                  <MonitorPlay className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wider">The Problem</h3>
              </div>
              
              <ul className="space-y-5 text-xl text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 font-bold">✗</span>
                  <span>Every shadcn website looks exactly the same. Same colors, same fonts, same boring look.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 font-bold">✗</span>
                  <span>Building beautiful animated components, gradients, or custom themes takes hours or days.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 font-bold">✗</span>
                  <span>Developers have to build everything from scratch.</span>
                </li>
              </ul>
            </motion.div>

            {/* The Solution */}
            <motion.div variants={fadeInUp} className="space-y-6 bg-blue-50 dark:bg-blue-950/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-900/30 shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-10">
                <Sparkles className="h-40 w-40 text-blue-500" />
              </div>
              <div className="flex items-center gap-4 text-blue-600 dark:text-blue-400">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  <Wand2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wider">The Solution</h3>
              </div>
              
              <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">shadcn-extras</p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">A complete design toolkit to solve this exact problem.</p>
              
              <ul className="space-y-4 text-lg font-medium text-zinc-700 dark:text-zinc-300 mt-4">
                <li className="flex items-center gap-3"><Blocks className="h-5 w-5 text-blue-500" /> 25+ Animated Components</li>
                <li className="flex items-center gap-3"><Palette className="h-5 w-5 text-pink-500" /> 11 Unique Themes</li>
                <li className="flex items-center gap-3"><Wrench className="h-5 w-5 text-emerald-500" /> 14 Visual Tools</li>
                <li className="flex items-center gap-3"><Sparkles className="h-5 w-5 text-amber-500" /> AI Theme Power</li>
              </ul>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* SLIDE 3: COMPONENTS */}
      <section className="flex min-h-screen w-full snap-start flex-col justify-center p-10 md:p-24 bg-zinc-950 text-white overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto w-full space-y-8"
        >
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">Not just simple buttons and inputs.</h2>
            <p className="text-xl text-zinc-400">Complex, animated components ready to copy-paste or install via CLI.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[65vh]">
            
            {/* Circular Gallery */}
            <motion.div variants={fadeInUp} className="relative rounded-3xl overflow-hidden bg-[#101828] border border-zinc-800 group cursor-grab active:cursor-grabbing">
              <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium border border-zinc-700">WebGL Parallax Gallery (Drag it!)</div>
              <div className="absolute inset-0 scale-[0.65] origin-center -translate-y-8 pointer-events-none">
                <CircularGallery items={galleryItems} title="Galleries" radius="30vmin" />
              </div>
            </motion.div>

            {/* Holographic Card */}
            <motion.div variants={fadeInUp} className="relative rounded-3xl overflow-hidden bg-black border border-zinc-800 flex items-center justify-center p-8">
              <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium border border-zinc-700">Holographic Card (Hover it!)</div>
              <div className="scale-75 origin-center">
                <HolographicCard
                  title="Hologram"
                  description="Reacts to your mouse movement with a stunning 3D floating card effect."
                  buttonText="Hover Me"
                  buttonHref="#"
                />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* SLIDE 4: THEME GALLERY */}
      <section className="flex h-screen w-full snap-start flex-col justify-center p-10 md:p-24 bg-transparent">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full"
        >
          <div className="space-y-6">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 text-violet-500">
              <Palette className="h-8 w-8" />
              <h2 className="text-3xl font-semibold uppercase tracking-wider">Theme Gallery</h2>
            </motion.div>
            <motion.h3 variants={fadeInUp} className="text-5xl font-bold leading-tight">
              Themes with real personality.
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-600 dark:text-zinc-400">
              Shadcn gives you themes, but they only change colors. Our themes change everything.
            </motion.p>
            <ul className="space-y-4 text-lg font-medium text-zinc-700 dark:text-zinc-300 mt-4">
              <li className="flex items-center gap-3"><span className="text-violet-500">✓</span> Colors & Fonts</li>
              <li className="flex items-center gap-3"><span className="text-violet-500">✓</span> Border Radius & Shadows</li>
              <li className="flex items-center gap-3"><span className="text-violet-500">✓</span> Hover Effects & Glassmorphism</li>
              <li className="flex items-center gap-3"><span className="text-violet-500">✓</span> Light & Dark mode supported</li>
            </ul>
          </div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
             <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm hover:border-violet-500 transition-colors text-center cursor-pointer">
               <h4 className="font-serif font-bold text-xl mb-2">Newspaper</h4>
               <p className="text-sm text-zinc-500">Serif fonts, sharp corners, B&W</p>
             </div>
             <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-sm hover:border-violet-500 transition-colors text-center cursor-pointer relative overflow-hidden">
               <div className="absolute inset-0 bg-blue-500/10" />
               <h4 className="font-mono font-bold text-xl mb-2 text-blue-400">Gaming</h4>
               <p className="text-sm text-blue-500/70">Neon glow, futuristic font</p>
             </div>
             <div className="col-span-2 bg-gradient-to-br from-white/40 to-white/10 dark:from-zinc-800/40 dark:to-zinc-800/10 backdrop-blur-md border border-white/20 dark:border-zinc-700 rounded-xl p-6 shadow-xl text-center cursor-pointer">
               <h4 className="font-bold text-xl mb-2">Glassmorphism</h4>
               <p className="text-sm text-zinc-500">Real glass blur effect on cards</p>
             </div>
             <div className="col-span-2 mt-4 text-center">
               <p className="text-lg font-bold text-zinc-800 dark:text-zinc-200">Just click Copy or Download.</p>
               <p className="text-zinc-500">Your whole app is themed in ten seconds.</p>
             </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SLIDE 5: AI THEME GENERATOR */}
      <section className="flex h-screen w-full snap-start flex-col justify-center p-10 md:p-24 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full"
        >
          <motion.div variants={fadeInUp} className="order-2 md:order-1 space-y-6">
            <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-xl">
               <div className="flex items-center gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-4">
                 <Sparkles className="h-5 w-5 text-blue-500" />
                 <span className="font-medium">Prompt-to-Theme</span>
               </div>
               <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                 &ldquo;Matcha green tea aesthetic&rdquo;
               </div>
               <div className="h-2 bg-blue-500 rounded w-1/3 mb-2 animate-pulse" />
               <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded w-2/3" />
            </div>
            
            <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-xl">
               <div className="flex items-center gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-4">
                 <ImageIcon className="h-5 w-5 text-blue-500" />
                 <span className="font-medium">Image-to-Theme</span>
               </div>
               <div className="flex gap-4 items-center">
                 <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-orange-400 to-pink-500 flex-shrink-0" />
                 <p className="text-sm text-zinc-500">Upload your company logo, and AI extracts colors & mood instantly.</p>
               </div>
            </div>
          </motion.div>

          <div className="space-y-6 order-1 md:order-2">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 text-blue-500">
              <Sparkles className="h-8 w-8" />
              <h2 className="text-3xl font-semibold uppercase tracking-wider">AI Theme Generator</h2>
            </motion.div>
            <motion.h3 variants={fadeInUp} className="text-5xl font-bold leading-tight">
              Powered by Google Gemini.
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-600 dark:text-zinc-400">
              Want your own unique theme? Describe what you want, or just upload an image.
            </motion.p>
            <ul className="space-y-4 text-lg font-medium text-zinc-700 dark:text-zinc-300 mt-4">
              <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> Generates colors, fonts, radius, and shadows</li>
              <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> Applies live on real shadcn components</li>
              <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> Perfect brand matching in seconds</li>
              <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> Even shadcn&apos;s official website cannot do this</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* SLIDE 6: DEVELOPER TOOLS */}
      <section className="flex h-screen w-full snap-start flex-col justify-center p-10 md:p-24 bg-transparent">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto w-full text-center space-y-12"
        >
          <div className="space-y-4">
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 text-emerald-500">
              <Wrench className="h-8 w-8" />
              <h2 className="text-3xl font-semibold uppercase tracking-wider">Developer Tools</h2>
            </motion.div>
            <motion.h3 variants={fadeInUp} className="text-5xl font-bold">
              14 visual generator tools.
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Everything a developer needs daily, all on one page. No need to search ten different websites.
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left pt-8">
            <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
              <h4 className="font-bold text-xl mb-2">Button Generator</h4>
              <p className="text-sm text-zinc-500">Change color, radius, hover effects. Copy Tailwind classes directly.</p>
            </div>
            <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
              <h4 className="font-bold text-xl mb-2">Shadow Generator</h4>
              <p className="text-sm text-zinc-500">Layered shadows with live previews.</p>
            </div>
            <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
              <h4 className="font-bold text-xl mb-2">Glassmorphism</h4>
              <p className="text-sm text-zinc-500">Perfect blur and transparency effects instantly.</p>
            </div>
            <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
              <h4 className="font-bold text-xl mb-2">Plus 11 More</h4>
              <p className="text-sm text-zinc-500">Skeleton loaders, scrollbars, gradients, patterns, and more.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SLIDE 7: INSTALLATION */}
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

      {/* SLIDE 8: STORYBOOK */}
      <section className="flex h-screen w-full snap-start flex-col justify-center p-10 md:p-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
           <motion.div variants={fadeInUp} className="order-2 md:order-1 rounded-2xl bg-zinc-100 p-2 shadow-2xl dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-6 aspect-video flex flex-col justify-center items-center gap-4 text-center">
              <BookOpen className="h-16 w-16 text-pink-500 mb-2" />
              <p className="font-mono text-lg font-bold">shadcn-extras/storybook</p>
              <p className="text-sm text-zinc-500">Live preview of all components & icons</p>
            </div>
          </motion.div>

          <div className="space-y-8 order-1 md:order-2">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 text-pink-500">
              <BookOpen className="h-8 w-8" />
              <h2 className="text-3xl font-semibold uppercase tracking-wider">Playground</h2>
            </motion.div>
            
            <motion.h3 variants={fadeInUp} className="text-5xl font-bold md:text-6xl leading-tight">
              Real Developer Experience.
            </motion.h3>
            
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-xl font-medium text-zinc-800 dark:text-zinc-200">
                Can I test the component before adding it to my project? Yes.
              </p>
              <ul className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start gap-3">
                  <MonitorPlay className="h-6 w-6 text-pink-500 shrink-0 mt-0.5" />
                  <span><strong>Live & Deployed:</strong> Complete Storybook available right from the header. No setup required.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Layers className="h-6 w-6 text-pink-500 shrink-0 mt-0.5" />
                  <span><strong>50+ Interactive Stories:</strong> Test every component and all 28 animated icons (rocket, heart, bell) individually.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wrench className="h-6 w-6 text-pink-500 shrink-0 mt-0.5" />
                  <span><strong>Live Controls:</strong> Change props like title and description dynamically and see instant results.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SLIDE 9: OUTRO */}
      <section className="relative flex h-screen w-full snap-start flex-col items-center justify-center p-10 text-center bg-gradient-to-t from-indigo-950 via-zinc-900 to-black text-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={staggerContainer}
          className="z-10 max-w-4xl space-y-8 flex flex-col items-center"
        >
          <motion.h2 variants={fadeInUp} className="text-5xl font-bold md:text-7xl mb-4">
            The Missing Toolkit
          </motion.h2>
          
          <motion.div variants={fadeInUp} className="space-y-6 text-xl md:text-2xl text-zinc-300 max-w-2xl text-left mx-auto bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
            <p className="font-bold text-white mb-4">To summarize, shadcn-extras solves three problems:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-blue-400 font-bold">1.</span>
                <span>Complex animated components, ready to copy.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-violet-400 font-bold">2.</span>
                <span>Themes with real personality, not just color swaps.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-emerald-400 font-bold">3.</span>
                <span>AI that builds your theme from text or even from an image.</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="pt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-transform hover:scale-105 active:scale-95">
                Explore The Project <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
