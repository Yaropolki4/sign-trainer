import { isDev } from '../utils.js';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const cssRule = {
  test: /\.css$/i,
  sideEffects: true,
  use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
  exclude: /node_modules/,
};
