import SvgChunkWebpackPlugin from "svg-chunk-webpack-plugin";

export const svgRule = {
    test: /\.svg$/,
    use: [
      {
        loader: SvgChunkWebpackPlugin.loader,
      }
    ],
    exclude: /node_modules/,
};
