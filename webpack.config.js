const webpack = require('webpack');


module.exports = {
    entry: "./src/routes.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
            }
        ]
    }
};

