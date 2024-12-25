import CopyPlugin from 'copy-webpack-plugin';

export const copyPlugin = new CopyPlugin({
  patterns: [{ from: 'mocks', to: './mocks' }],
});
