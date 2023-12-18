const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: (content, loaderContext) => {
                if (loaderContext.resourcePath.includes('src')) {
                  return (
                    `@use '~/styles/abstracts/variables'; @use '~/styles/abstracts/mixins';` +
                    content
                  )
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new Dotenv({
      path: './.env.production' // Specify the path to your production environment file
    })
  ]
}
