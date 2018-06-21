const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "./app.bundle.js"
    },
    module: {
        rules: [
          { test: /\.css$/, use: ["style-loader","css-loader"] },
          { test: /\.html$/, use: "html-loader" },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name: "[name].[ext]",
                  outputPath: "../dist/img/",
                  publicPath: "../dist/img/"
                }
              },
              'img-loader'
            ]
          }
        ]
      }
} 