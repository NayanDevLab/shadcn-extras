import type { Metadata } from 'next';
import { Header } from '@/components/website/header';

export const metadata: Metadata = {
  title: 'Theme Gallery - shadcn-extras',
  description:
    'Pre-built shadcn/ui themes with personality — glassmorphism, newspaper, gaming, nature and more. Preview live components, then copy or download the CSS.',
};

export default function ThemesLayout({
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
