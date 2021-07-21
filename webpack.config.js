const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
    mode: 'development',

    target: 'node',

    // entry: './src/index.js',
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js'),
    },

    output: {
        path: '/',
        filename: 'bundle.js'
      },

    externals: [nodeExternals()],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',


                // use: 'babel-loader',
                // test: /\.js$/,
                // exclude: /node_modules/
            },
        ],
    },

    plugins: [
        new NodemonPlugin({
            nodeArgs: '--inspect=0.0.0.0:3001',
        }),
    ],

    devtool: 'inline-source-map',
};
