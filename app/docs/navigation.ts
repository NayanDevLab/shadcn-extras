type NavigationItem = {
  name: string;
  href: string;
  isNew?: boolean;
  isUpdated?: boolean;
};

type NavigationGroup = {
  name: string;
  children: NavigationItem[];
};

export const NAVIGATION: NavigationGroup[] = [
  {
    name: 'Getting Started',
    children: [
      { name: 'Introduction', href: '/docs' },
      { name: 'Installation', href: '/docs/installation' },
    ],
  },
  {
    name: 'Galleries & Layouts',
    children: [
      {
        name: 'Timed Cards',
        href: '/docs/timed-cards',
        isNew: true,
      },
      {
        name: 'Infinite Parallax Gallery',
        href: '/docs/infinite-parallax-gallery',
        isNew: true,
      },
      { name: 'Circular Gallery', href: '/docs/circular-gallery', isNew: true },
      { name: 'Enlarge Gallery', href: '/docs/enlarge-gallery' },
      { name: 'Grid Newspaper', href: '/docs/grid-newspaper' },
      { name: 'Newspaper Layout', href: '/docs/newspaper' },
      { name: 'Animated Image Grid', href: '/docs/animated-image-grid' },
      { name: 'Hexagon Grid', href: '/docs/hexagon-grid' },
    ],
  },
  {
    name: 'Interactive Cards',
    children: [
      { name: 'Holographic Card', href: '/docs/holographic-card', isNew: true },
      { name: 'Testimonial Card', href: '/docs/testimonial-card' },
      { name: 'Blog Card One', href: '/docs/blog-card-one' },
      { name: 'Blog Card Two', href: '/docs/blog-card-two' },
      { name: 'Blog Card Three', href: '/docs/blog-card-three' },
      { name: 'Blog Card Four', href: '/docs/blog-card-four' },
    ],
  },
  {
    name: 'Pricing Cards',
    children: [
      { name: 'Pricing Card One', href: '/docs/pricing-card-one' },
      { name: 'Pricing Card Two', href: '/docs/pricing-card-two' },
    ],
  },
  {
    name: 'Dashboard UI',
    children: [
      { name: 'KPI Card', href: '/docs/kpi-card' },
      { name: 'Leaderboard Card', href: '/docs/leaderboard-card' },
      { name: 'Day Range', href: '/docs/day-range' },
    ],
  },
  {
    name: 'General UI',
    children: [
      { name: 'Timeline Rail', href: '/docs/timeline-rail' },
      { name: 'Chevron Steps', href: '/docs/chevron-steps' },
      { name: 'Shimmer / Skeleton', href: '/docs/shimmer' },
      { name: 'Testimonial', href: '/docs/testimonial' },
    ],
  },
  {
    name: 'Typography & Icons',
    children: [
      { name: 'Text Circle Scroll', href: '/docs/text-circle-scroll' },
      { name: 'Animated Icons', href: '/docs/icons' },
    ],
  },
  {
    name: 'Spinners',
    children: [
      { name: 'Radial Dots', href: '/docs/radial-dots-spinner' },
      { name: 'Concentric Rings', href: '/docs/concentric-rings-spinner' },
      { name: 'Sequential Pulse', href: '/docs/spinner-sequential-pulse' },
    ],
  },
  {
    name: 'Backgrounds',
    children: [
      { name: 'Gradient Generator', href: '/docs/backgrounds/gradient' },
      { name: 'Gradient Mesh', href: '/docs/backgrounds/mesh' },
      { name: 'Pattern Generator', href: '/docs/backgrounds/pattern' },
      { name: 'Noise & Grain', href: '/docs/backgrounds/noise' },
      { name: 'Animated Presets', href: '/docs/backgrounds/animated' },
    ],
  },
];
