import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  mode: isProduction ? 'production' : 'development',

  entry: {
    'bundle/index': './src/pages/index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: 'file-loader'
      },
      {
        test: /\.(ttf|eot|woff|woff2|otf)$/,
        use: 'file-loader'
      },
      {
        test: /.pug$/,
        use: {
          loader: 'pug-loader',
          query: {} // Can be empty
        }
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, './public/'),
    filename: '[name].bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/pug/index.pug'),
    })
  ],

  devServer: {
    publicPath: '/',
    contentBase: './public',
    hot: true
  }
};
