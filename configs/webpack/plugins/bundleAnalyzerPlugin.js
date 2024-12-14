import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({ generateStatsFile: true });
