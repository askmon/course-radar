module.exports = {

  resolve: {
    extensions: ['.ts','.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },

  context: __dirname + "/app/public/presentation/home",
  entry: "./main.ts",
  output: {
    path: __dirname + "/app/public",
    filename: "bundle.js"
  }
}
