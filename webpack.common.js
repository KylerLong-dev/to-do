// webpack.common.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { NONAME } = require("dns");

module.exports = {
  entry: {
  app: "./src/index.js",
  }, 
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean the output folder before each build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Adjust path to your template file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader", // Ensure this is added to handle the file path
          },
        ],
      }
    ],
  },
};
