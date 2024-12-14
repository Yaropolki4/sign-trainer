import { definePlugin } from './definePlugin.js';
import { htmlWebpackPlugin } from './htmlWebpackPlugin.js';
import { bundleAnalyzerPlugin } from './bundleAnalyzerPlugin.js';
import { miniCssExtractPlugin } from './miniCssExtractPlugin.js';
import { svgChunkWebpackPlugin } from './svgChunkWebpackPlugin.js';

export const plugins = [
    definePlugin,
    htmlWebpackPlugin,
    miniCssExtractPlugin,
    svgChunkWebpackPlugin,
    process.env.BUNDLE_ANALYZER_MODE && bundleAnalyzerPlugin,
].filter(Boolean);
