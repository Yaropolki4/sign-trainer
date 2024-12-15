export const tsRule = {
    test: /\.tsx?$/,
    use: [
        'babel-loader',
        {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              compilerOptions: {
                noEmit: false,
              }
            },
          },
    ],
    exclude: /node_modules/,
};
