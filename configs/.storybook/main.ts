import type { StorybookConfig } from '@storybook/react-webpack5';
import { aliases } from '../webpack/aliases';
import { svgChunkWebpackPlugin } from '../webpack/plugins/svgChunkWebpackPlugin';
import { svgRule } from '../webpack/rules/svg';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
      parser: {
        syntax: 'typescript',
        decorators: true,
      },
    },
  }),
  webpackFinal: config => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases,
    };

    config.plugins?.push(svgChunkWebpackPlugin);
    config.module?.rules?.push(svgRule);

    return config;
  },
};
export default config;
