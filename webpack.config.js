module.exports = {

  resolve: {
    extensions: ['.ts','.js', '.html']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: [
          'awesome-typescript-loader',
          'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
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
