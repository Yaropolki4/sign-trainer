import { isDev } from '../utils.js';

export const tsRule = {
    test: /\.tsx?$/,
    use: [
        'babel-loader',
        {
            loader: 'ts-loader',
            options: {
              transpileOnly: isDev,
              compilerOptions: {
                noEmit: false,
              }
            },
          },
    ],
    exclude: /node_modules/,
};
