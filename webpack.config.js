const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "/inbox.js"),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devtool: "sourcemap"
};
