// jest.setup.ts
import '@testing-library/jest-dom';

// Mock Next.js router (if components use it)
jest.mock('next/router', () => require('next-router-mock'));

// Minimal next/link + next/image mocks (avoid SSR/optimizations in tests)
jest.mock('next/link', () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

jest.mock('next/image', () => {
  return function MockNextImage(props: any) {
    // pass-through <img> so Testing Library can query by alt, etc.
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt ?? ''} />;
  };
});
