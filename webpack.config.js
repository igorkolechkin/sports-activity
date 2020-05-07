const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const fileName = ext => {
  return isDev ? `[name].${ext}` : `[name][chunkhash].${ext}`;
};

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    filename: fileName('js'),
    path: path.resolve(__dirname, 'build' ),
    publicPath: isDev ? '/' : './'
  },

  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@components': path.resolve(__dirname, 'src/components/')
    }
  },

  mode: isDev ? 'development' : 'production',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.join(__dirname, 'build' ),
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-flexbugs-fixes'),
                require('autoprefixer')({
                  browsers: 'last 15 version',
                }),
              ]
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [
          { loader: "html-loader" }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: true,
        sourceMap: true
      }),
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: !isDev,
        removeComments: !isDev
      }
    }),
    new MiniCssExtractPlugin({
      filename: fileName('css'),
      chunkFilename: isDev ? `[id].css` : `[id][chunkhash].css`,
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 8080
  }
};
