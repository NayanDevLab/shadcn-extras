const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: './' });

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],
  testMatch: ['<rootDir>/**/__tests__/**/*.(test|spec).(ts|tsx)'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },

  // 👇 ignore the CLI package to avoid naming collision
  modulePathIgnorePatterns: ['<rootDir>/cli/'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/out/',
    '/storybook-static/',
    '/dist/',
    '/build/',
    '/cli/', // 👈 keep tests from looking into cli too
  ],
  watchPathIgnorePatterns: ['<rootDir>/cli/'],

  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    '!components/**/index.{ts,tsx}',
    '!**/*.stories.{ts,tsx}',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: { statements: 0, branches: 0, functions: 0, lines: 0 },
  },
};

module.exports = createJestConfig(customJestConfig);
