const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        loaders: ["css-loader", "less-loader"],
        include: path.resolve(__dirname, "../")
      }
    ]
  }
};