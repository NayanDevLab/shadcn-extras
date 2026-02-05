// next.config.mjs
import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';
import { remarkCodeHike } from '@code-hike/mdx';

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // GitHub Pages needs a static export
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,

  // We run ESLint as a dedicated CI step (npm run lint),
  // so skip lint during `next build` for faster/cleaner output.
  eslint: {
    ignoreDuringBuilds: true,
    // Optional: limit the dirs that Next would lint if you re-enable it later
    dirs: ['app', 'components', 'hooks', 'lib', 'scripts', 'stories'],
  },
};

// Only add basePath/assetPrefix on CI so local dev stays clean
const isCI = process.env.GITHUB_ACTIONS === 'true';
const repo = 'shadcn-extras';

const nextConfig = {
  ...baseConfig,
  ...(isCI ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` } : {}),
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, [remarkCodeHike, { theme: 'material-darker' }]],
  },
});

export default withMDX(nextConfig);
