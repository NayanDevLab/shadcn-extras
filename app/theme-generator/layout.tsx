import type { Metadata } from 'next';
import { Header } from '@/components/website/header';

export const metadata: Metadata = {
  title: 'AI Theme Generator - shadcn-extras',
  description:
    'Describe an aesthetic and let AI generate a complete shadcn/ui theme — colors, fonts, radius and shadows — with a live component preview and copy/download.',
};

export default function ThemeGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
