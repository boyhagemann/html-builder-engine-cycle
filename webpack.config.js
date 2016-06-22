path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: './src/index.js',
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: 'client.js',
        publicPath: '/js/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ]
    }
};