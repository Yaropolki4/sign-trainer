import type { Config } from 'jest';
import { defaults } from 'jest-config';

const isCoverageMode = Boolean(process.env.COVERAGE_MODE);

const config: Config = {
  ...defaults,
  rootDir: '../',
  preset: 'ts-jest',
  collectCoverage: isCoverageMode,
  collectCoverageFrom: [
    '<rootDir>/src/**',
  ],
  coverageDirectory: '<rootDir>/test-coverage-report',
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
  testMatch: [
    '<rootDir>/src/**/*.(test|spec).(ts|tsx|js|jsx)',
  ],
};

export default config;
