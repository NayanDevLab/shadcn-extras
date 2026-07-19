import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Sparkles, Wand2, MonitorPlay } from 'lucide-react';

export default function PresentationPage() {
  return (
    <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans selection:bg-blue-500/30">
      
      {/* SLIDE 1: TITLE */}
      <section className="relative flex h-screen w-full snap-start flex-col items-center justify-center p-10 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent dark:from-blue-900/20" />
        <div className="z-10 max-w-4xl space-y-6">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-black text-white shadow-xl dark:bg-white dark:text-black">
            <Sparkles className="h-10 w-10" />
          </div>
          <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
            Shadcn Extras
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-zinc-600 dark:text-zinc-400 md:text-3xl">
            Premium, beautifully crafted React components to make your next project stand out.
          </p>
          <div className="pt-8 animate-bounce text-zinc-400">
            <span className="text-sm font-medium uppercase tracking-widest">Scroll Down</span>
          </div>
        </div>
      </section>

      {/* SLIDE 2: WHAT IS IT? */}
      <section className="flex h-screen w-full snap-start flex-col justify-center p-10 md:p-24">
        <div className="max-w-5xl mx-auto space-y-8 w-full">
          <div className="flex items-center gap-4 text-blue-600 dark:text-blue-400">
            <Wand2 className="h-8 w-8" />
            <h2 className="text-3xl font-semibold uppercase tracking-wider">What is it?</h2>
          </div>
          <h3 className="text-5xl font-bold md:text-6xl leading-tight">
            It is just like Shadcn UI, but with extra magic.
          </h3>
          <p className="text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
            I built a collection of highly animated, complex, and beautiful UI components. From 3D Parallax Galleries to Animated Grids. Everything is ready to copy and paste directly into your app.
          </p>
        </div>
      </section>

      {/* SLIDE 3: WHY IS IT USEFUL? */}
      <section className="flex h-screen w-full snap-start flex-col justify-center bg-zinc-50 dark:bg-zinc-900 p-10 md:p-24">
        <div className="max-w-5xl mx-auto space-y-12 w-full">
          <h2 className="text-5xl font-bold md:text-7xl">Why use this?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 bg-white dark:bg-zinc-950 p-8 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <span className="text-xl font-bold">1</span>
              </div>
              <h4 className="text-2xl font-bold">Save Time</h4>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Don't waste hours writing complex CSS or GSAP animations from scratch. Just copy the code.
              </p>
            </div>
            
            <div className="space-y-4 bg-white dark:bg-zinc-950 p-8 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800">
              <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <span className="text-xl font-bold">2</span>
              </div>
              <h4 className="text-2xl font-bold">Look Professional</h4>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Instantly upgrade your website's look. Give your users a premium, agency-level experience.
              </p>
            </div>

            <div className="space-y-4 bg-white dark:bg-zinc-950 p-8 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800">
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <span className="text-xl font-bold">3</span>
              </div>
              <h4 className="text-2xl font-bold">Win Hackathons</h4>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                First impression is the last impression. Wow the judges instantly with stunning UI components.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 4: HOW TO CUSTOMIZE */}
      <section className="flex h-screen w-full snap-start flex-col justify-center p-10 md:p-24">
        <div className="max-w-5xl mx-auto space-y-8 w-full">
          <div className="flex items-center gap-4 text-orange-500">
            <Code2 className="h-8 w-8" />
            <h2 className="text-3xl font-semibold uppercase tracking-wider">How to Customize?</h2>
          </div>
          <h3 className="text-5xl font-bold md:text-6xl leading-tight">
            You own the code.
          </h3>
          <p className="text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
            Because it works just like Shadcn UI, it is not an NPM package that hides the magic. You copy the source code directly into your folder. 
          </p>
          <div className="mt-8 rounded-2xl bg-zinc-900 p-8 text-zinc-300 font-mono text-lg shadow-2xl dark:bg-black border border-zinc-800">
            <p><span className="text-pink-400">1.</span> Change Tailwind classes to match your brand colors.</p>
            <p className="mt-4"><span className="text-pink-400">2.</span> Edit Framer Motion or GSAP values to make animations faster or slower.</p>
            <p className="mt-4"><span className="text-pink-400">3.</span> Add your own logic. It is completely yours!</p>
          </div>
        </div>
      </section>

      {/* SLIDE 5: OUTRO */}
      <section className="relative flex h-screen w-full snap-start flex-col items-center justify-center p-10 text-center bg-black text-white">
        <div className="z-10 max-w-4xl space-y-8 flex flex-col items-center">
          <MonitorPlay className="h-20 w-20 text-blue-400 mb-4" />
          <h2 className="text-5xl font-bold md:text-7xl">
            Let's build something amazing.
          </h2>
          <p className="text-2xl text-zinc-400 max-w-2xl">
            Thank you to the judges for reviewing this project. I hope Shadcn Extras helps developers build beautiful websites faster.
          </p>
          <div className="pt-8">
            <Link href="/docs">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xl font-bold text-black transition-transform hover:scale-105 active:scale-95">
                View the Docs <ArrowRight className="h-6 w-6" />
              </span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
