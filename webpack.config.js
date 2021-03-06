const Path = require('path');
module.exports = {
  entry: {
    main: "./main",
    worker: "./worker"
  },
  output: {
    filename: "[name].entry.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};
