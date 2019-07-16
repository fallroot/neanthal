const path = require('path')

module.exports = {
  entry: './src/neanthal.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|dist|test/,
        include: /src/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'neanthal.js',
    library: 'toNeanthal',
    libraryExport: 'default',
    libraryTarget: 'umd'
  }
}
