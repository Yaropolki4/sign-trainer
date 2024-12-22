import 'webpack-dev-server';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import { rules } from './rules/index.js';
import { plugins } from './plugins/index.js';
import { isDev } from './utils.js';
import { aliases } from './aliases.js';
import { outputPath } from './constants.js';

const output = path.join(process.cwd(), outputPath);
const minimizer = [];

if (!isDev) {
  minimizer.push(new TerserPlugin());
}

const config = {
  devServer: {
    static: {
      directory: output,
    },
    compress: true,
    port: process.env.PORT ?? 4000,
    open: true,
    client: {
      overlay: false,
    },
    historyApiFallback: true,
  },
  entry: {
    app: './src/app/index.tsx',
  },
  output: {
    path: output,
    filename: '[name].js',
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
    alias: aliases,
  },
  devtool: isDev ? 'inline-source-map' : 'source-map',
  plugins,
  module: {
    rules,
  },
  mode: isDev ? 'development' : 'production',
  optimization: {
    minimize: !isDev,
    minimizer,
  },
};

export default config;
