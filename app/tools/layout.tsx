import type { Metadata } from 'next';
import { Header } from '@/components/website/header';

export const metadata: Metadata = {
  title: 'Developer Tools - shadcn-extras',
  description:
    'Visual generators for buttons, inputs, cards, tables, shadows, glassmorphism, gradients, skeletons and more — tweak live and copy Tailwind or CSS.',
};

export default function ToolsLayout({
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
