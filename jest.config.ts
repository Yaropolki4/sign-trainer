import type { Config } from 'jest';
import {defaults} from 'jest-config';

const config: Config = {
  ...defaults,
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**',
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@widgets/(.*)$': '<rootDir>/src/widgets/$1',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
    '^@entities/(.*)$': '<rootDir>/src/entities/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
  },
};

export default config;
