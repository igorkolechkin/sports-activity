const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
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
    path: path.resolve(__dirname, 'build'),
  },

  devtool: isDev ? 'inline-sourcemap' : false,

  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@components': path.resolve(__dirname, 'src/components')
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
          isDev ? 'style-loader' : { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-flexbugs-fixes'),
                require('autoprefixer')(),
              ]
            }
          },
          'sass-loader'
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
              name: '[path][name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './fonts',
              name: '[name]/[folder]/[name].[ext]'
            }
          }
        ]
      }
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
      chunkFilename: isDev ? `[id].css` : `[id][hash].css`,
    }),
    // new CopyPlugin([
    //   {
    //     from: path.resolve(__dirname, 'src/assets/fonts'),
    //     to: path.resolve(__dirname, 'build/fonts')
    //   }
    // ]),
  ],

  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 8080
  }
};
