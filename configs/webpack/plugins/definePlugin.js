import webpack from 'webpack';

const { DefinePlugin } = webpack;

export const definePlugin = new DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
});
