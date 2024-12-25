import { definePlugin } from './definePlugin.js';
import { htmlWebpackPlugin } from './htmlWebpackPlugin.js';
import { bundleAnalyzerPlugin } from './bundleAnalyzerPlugin.js';
import { miniCssExtractPlugin } from './miniCssExtractPlugin.js';
import { svgChunkWebpackPlugin } from './svgChunkWebpackPlugin.js';
import { copyPlugin } from './copyPlugin.js';

export const plugins = [
  definePlugin,
  htmlWebpackPlugin,
  miniCssExtractPlugin,
  svgChunkWebpackPlugin,
  process.env.BUNDLE_ANALYZER_MODE && bundleAnalyzerPlugin,
  copyPlugin,
].filter(Boolean);
