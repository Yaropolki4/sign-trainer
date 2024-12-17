import 'webpack-dev-server';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import { rules } from './rules/index.js';
import { plugins } from './plugins/index.js';
import { isDev } from './utils.js';

const output = path.join(process.cwd(), './', 'build/web');
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
  },
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: output,
    filename: '[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
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
