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
    "styled-components": "styled-components",
    "inter-ui/inter.css": "inter-ui/inter.css",
    "@popperjs/core": "@popperjs/core",
    "react-popper": "react-popper"
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
        test: /\.svg$/,
        include: /src\/components\/Glyphs/,
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
        test: /\.(eot|svg|png|jpg|jpeg|gif|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // Images larger than 10 KB won’t be inlined
              // If the file is greater than the limit, file-loader is used by default and all query parameters are passed to it.
              // Using an alternative to file-loader is enabled via the fallback option.
              limit: 10 * 1024
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
              postcssOptions: {
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
          }
        ]
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: "static", openAnalyzer: false })
  ]
};
