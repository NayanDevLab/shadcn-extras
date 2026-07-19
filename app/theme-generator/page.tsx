'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { KpiCard } from '@/components/core/kpi-card';
import { HolographicCard } from '@/components/core/holographic-card';
import { PieChart, Loader2, Sparkles, Wand2, Copy, Check } from 'lucide-react';

export default function ThemeGeneratorPage() {
  const [apiKey, setApiKey] = useState('');
  const [prompt, setPrompt] = useState('Cyberpunk Neon with hot pinks and electric blues');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  
  const [theme, setTheme] = useState<{ light: Record<string, string>; dark: Record<string, string> } | null>(null);

  useEffect(() => {
    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey) setApiKey(savedKey);
  }, []);

  const handleSaveKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('gemini_api_key', key);
  };

  const generateTheme = async () => {
    if (!apiKey) {
      setError('Please enter your Gemini API Key first.');
      return;
    }
    if (!prompt) {
      setError('Please enter a prompt.');
      return;
    }
    
    setError('');
    setIsLoading(true);

    const systemInstruction = `You are an expert UI/UX designer and Tailwind CSS / Shadcn UI expert.
Your task is to generate a beautiful, cohesive HSL color palette based on the user's prompt.
You MUST output valid JSON ONLY, with NO markdown formatting, NO \`\`\`json wrappers. Just raw JSON.
The JSON must have this exact structure containing valid HSL values (e.g. "210 40% 98%"):
{
  "light": {
    "--background": "...", "--foreground": "...", "--card": "...", "--card-foreground": "...",
    "--popover": "...", "--popover-foreground": "...", "--primary": "...", "--primary-foreground": "...",
    "--secondary": "...", "--secondary-foreground": "...", "--muted": "...", "--muted-foreground": "...",
    "--accent": "...", "--accent-foreground": "...", "--destructive": "...", "--destructive-foreground": "...",
    "--border": "...", "--input": "...", "--ring": "...", "--radius": "0.5rem"
  },
  "dark": {
    "--background": "...", "--foreground": "...", "--card": "...", "--card-foreground": "...",
    "--popover": "...", "--popover-foreground": "...", "--primary": "...", "--primary-foreground": "...",
    "--secondary": "...", "--secondary-foreground": "...", "--muted": "...", "--muted-foreground": "...",
    "--accent": "...", "--accent-foreground": "...", "--destructive": "...", "--destructive-foreground": "...",
    "--border": "...", "--input": "...", "--ring": "...", "--radius": "0.5rem"
  }
}
Ensure the light mode has a light background and dark text, and dark mode has a dark background and light text. Ensure high contrast for readability. Primary colors should perfectly capture the prompt's aesthetic.`;

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: systemInstruction }] },
          generationConfig: {
            temperature: 0.7,
            responseMimeType: "application/json",
          }
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error?.message || 'Failed to fetch from Gemini API');
      }

      const data = await response.json();
      let textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!textResponse) throw new Error('Invalid response from Gemini');
      
      const parsedTheme = JSON.parse(textResponse.trim());
      setTheme(parsedTheme);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred while generating the theme.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!theme) return;
    
    let cssString = `@layer base {\n  :root {\n`;
    Object.entries(theme.light).forEach(([key, value]) => {
      cssString += `    ${key}: ${value};\n`;
    });
    cssString += `  }\n\n  .dark {\n`;
    Object.entries(theme.dark).forEach(([key, value]) => {
      cssString += `    ${key}: ${value};\n`;
    });
    cssString += `  }\n}`;

    navigator.clipboard.writeText(cssString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Convert theme object to CSS string for the style tag
  const injectedStyles = theme ? `
    #theme-preview-wrapper {
      ${Object.entries(theme.light).map(([k, v]) => `${k}: ${v};`).join('\n')}
    }
    :is(.dark) #theme-preview-wrapper {
      ${Object.entries(theme.dark).map(([k, v]) => `${k}: ${v};`).join('\n')}
    }
  ` : '';

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans pt-12">
      {theme && <style>{injectedStyles}</style>}
      
      <div className="max-w-[1400px] mx-auto p-4 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-blue-500" />
            AI Theme Generator
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-lg">
            Describe an aesthetic, and let AI generate the perfect Shadcn & Tailwind CSS theme.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
          {/* Controls Panel */}
          <div className="lg:col-span-4 space-y-6 bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            
            <div className="space-y-3">
              <Label htmlFor="api-key" className="text-sm font-semibold flex justify-between">
                Gemini API Key
                <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline text-xs font-normal">Get free key &rarr;</a>
              </Label>
              <Input 
                id="api-key"
                type="password" 
                placeholder="AIzaSy..." 
                value={apiKey}
                onChange={(e) => handleSaveKey(e.target.value)}
                className="bg-zinc-50 dark:bg-zinc-950"
              />
              <p className="text-xs text-zinc-400">Stored locally in your browser. Not sent to any server except Google.</p>
            </div>

            <div className="h-[1px] w-full bg-zinc-100 dark:bg-zinc-800" />

            <div className="space-y-3">
              <Label htmlFor="prompt" className="text-sm font-semibold">Theme Description</Label>
              <textarea 
                id="prompt"
                placeholder="e.g. Matcha green tea aesthetic with soft cream colors and dark leafy greens" 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
                className="w-full resize-none bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-900/50">
                {error}
              </div>
            )}

            <Button 
              className="w-full gap-2 text-md h-12 bg-blue-600 hover:bg-blue-700 text-white" 
              onClick={generateTheme}
              disabled={isLoading || !prompt}
            >
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Wand2 className="h-5 w-5" />}
              {isLoading ? 'Generating Magic...' : 'Generate Theme'}
            </Button>

            {theme && (
              <div className="pt-6 space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm">Generated CSS Variables</h3>
                  <Button variant="outline" size="sm" onClick={copyToClipboard} className="h-8 text-xs gap-1">
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copied ? 'Copied' : 'Copy CSS'}
                  </Button>
                </div>
                <div className="bg-zinc-950 text-zinc-300 p-4 rounded-xl text-xs font-mono overflow-auto max-h-[300px] border border-zinc-800">
                  <pre>
                    <code>
{`@layer base {
  :root {
${Object.entries(theme.light).map(([k,v]) => `    ${k}: ${v};`).join('\n')}
  }
  .dark {
${Object.entries(theme.dark).map(([k,v]) => `    ${k}: ${v};`).join('\n')}
  }
}`}
                    </code>
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-8 bg-zinc-200/50 dark:bg-black p-4 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden flex flex-col items-center">
            
            <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-zinc-200 dark:border-zinc-800 z-10">
              Live Preview
            </div>

            {/* This wrapper inherits the injected CSS variables */}
            <div 
              id="theme-preview-wrapper"
              className="w-full h-full min-h-[600px] rounded-xl bg-background text-foreground transition-colors duration-700 p-8 flex flex-col gap-12 overflow-y-auto border border-border"
            >
              
              {/* Header / Intro */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
                <p className="text-muted-foreground text-lg">
                  This entire pane is reacting to your generated CSS variables.
                </p>
                <div className="flex gap-4">
                  <Button>Primary Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div className="w-full">
                  <KpiCard
                    label='Monthly Active Users'
                    value={42500}
                    delta={12.5}
                    trend='up'
                    caption='vs Last Month'
                    tone='primary'
                    icon={<PieChart className='h-4 w-4 text-primary' />}
                  />
                </div>
                
                <div className="w-full">
                  <KpiCard
                    label='Server Errors'
                    value={12}
                    delta={-4}
                    trend='down'
                    caption='vs Last Month'
                    icon={<PieChart className='h-4 w-4 text-destructive' />}
                  />
                </div>
              </div>

              {/* Holographic Card Preview */}
              <div className="w-full max-w-md mx-auto h-[400px]">
                <HolographicCard
                  title="Aesthetic Card"
                  description="This component inherits the new theme variables beautifully."
                  buttonText="Hover Over Me"
                  buttonHref="#"
                />
              </div>
              
              {/* Form elements */}
              <div className="bg-card text-card-foreground p-6 rounded-xl border border-border space-y-4 shadow-sm w-full max-w-xl mx-auto">
                <h3 className="font-semibold text-lg">Subscribe to Newsletter</h3>
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input placeholder="name@example.com" />
                </div>
                <Button className="w-full">Subscribe</Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
