module.exports = {
  entry: {
    main: ["./src/index.jsx"]
  },
  rootDir: "./src",
  output: {
    path: __dirname + "/js",
    filename: "[name].js"
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        loader: ["babel"],
        query: {
          presets: ["react", "es2015", "es2016", "stage-2"],
          cacheDirectory: true
        }
      }
    ],
    resolve: {
      extensions: ["", ".js", "jsx"]
    }
  }
};

