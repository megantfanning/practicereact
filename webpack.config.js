const webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/src/routes.jsx`,
  resolve: {
    root: `${__dirname}/src`,
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'build.js',
    publicPath: '/',
    sourcePrefix: '  ',
  },
  plugins: [
    new webpack.IgnorePlugin(/^(buffertools)$/), // unwanted "deeper" dependency
    new webpack.IgnorePlugin(/regenerator|nodent|js\-beautify/, /ajv/),
  ],
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          `${__dirname}/src`,
        ],
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
};

