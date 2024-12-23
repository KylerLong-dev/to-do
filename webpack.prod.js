const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin"); // JS minifier plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true, // Enable minimization in production mode
    minimizer: [
      new TerserPlugin({ // Minimize JS
        terserOptions: {
          compress: {
            drop_console: true, // Remove console logs in production
          },
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // Output filename pattern for extracted CSS
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"], // Extract CSS in production
      },
    ],
  },
});

