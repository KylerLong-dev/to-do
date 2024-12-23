// webpack.dev.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map", // For better debugging in development
  devServer: {
    watchFiles: ["./src/template.html"], // Watches the HTML file for changes
    open: true, // Open the browser automatically
  },
});
