var path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    path: __dirname,
    filename: 'index.js'
  }
};
