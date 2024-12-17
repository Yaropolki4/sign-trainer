import { isDev } from "../utils.js";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import tailwindcss from 'tailwindcss';
import config from '../../../tailwind.config.js';

export const cssRule = {
    test: /\.(sa|sc|c)ss$/i,
    use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        "css-loader",
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: [
                        tailwindcss(config),
                        "autoprefixer",
                    ],
                },
            },
        },
    ],
    exclude: /node_modules/,
};
