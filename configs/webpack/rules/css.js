import { isDev } from "../utils.js";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

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
                        "autoprefixer",
                    ],
                },
            },
        },
    ],
    exclude: /node_modules/,
};
