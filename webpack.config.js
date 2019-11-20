const path = require("path");
 
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"), //your project path
    filename: "bundle.js" //custom name
  },
  module: {
    rules: [
      {
        loader: "babel-loader", //the babel webpack loader
        test: /\.js$/, //run only files with .js
        exclude: /node_modules/ //exclude the node modules library
      },
      {
        test: /\.s?css$/,
        use: ["style-loader","css-loader","sass-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map"
}; 