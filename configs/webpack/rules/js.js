export const jsRule = {
    test: /\.jsx?$/,
    use: [
        'babel-loader',
    ],
    exclude: /node_modules/,
};
