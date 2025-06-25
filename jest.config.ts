import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: [
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)+(spec|test|tests).ts?(x)',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript and TSX files
  },
  moduleNameMapper: {
    // Mock static files (e.g., CSS, images) to prevent syntax errors
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};

export default config;