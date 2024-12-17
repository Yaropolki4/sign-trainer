import { isDev } from "../utils.js";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const cssRule = {
    test: /\.css$/i,
    use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        "css-loader",
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: [
                        'tailwindcss',
                        "autoprefixer",
                        'cssnano'
                    ],
                },
            },
        },
    ],
    exclude: /node_modules/,
};
