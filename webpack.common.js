const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    clean: true,
    assetModuleFilename: 'assets/images/[name][ext]'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      hooks: path.join(__dirname, 'src/hooks'),
      layout: path.join(__dirname, 'src/layout'),
      components: path.join(__dirname, 'src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp4)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
