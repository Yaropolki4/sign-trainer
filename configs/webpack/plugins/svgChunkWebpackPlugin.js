import SvgChunkWebpackPlugin from 'svg-chunk-webpack-plugin';

export const svgChunkWebpackPlugin = new SvgChunkWebpackPlugin({
  svgstoreConfig: {
    svgAttrs: {
      'aria-hidden': true,
      style:
        'position: absolute; width: 0; height: 0; overflow: hidden; display: none;',
    },
  },
});
