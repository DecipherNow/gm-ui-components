const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: "./src/components/index.js",
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".json", ".js"]
  },
  target: "node",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "build.js",
    libraryTarget: "umd",
    library: "gm-ui-components"
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "styled-components": "styled-components"
  },
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader"
        },
        test: /\.js$/,

        exclude: /node_modules/
      },
      {
        test: /\.(jpg|gif)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader"
          }
        ]
      },
      {
        test: /\.(eot|png|jpg|gif|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // Images larger than 10 KB won’t be inlined
              limit: 10 * 1024
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              configFile: path.resolve(__dirname, "config", "svgr.config.js")
            }
          }
        ]
      },
      {
        test: /\.(css|scss|less)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
              // sourceMap currently disabled due to a runtime overhead in
              // development; a noticeable flicker is observed applying CSS
              // sourceMap: true
            }
          },
          "resolve-url-loader",
          {
            loader: "postcss-loader",
            options: {
              // Necessary for external CSS imports to work
              ident: "postcss",
              // sourceMap: true,
              plugins: () => [
                require("postcss-flexbugs-fixes"),
                autoprefixer({
                  flexbox: "no-2009"
                })
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [new BundleAnalyzerPlugin({ analyzerMode: "static" })]
};
