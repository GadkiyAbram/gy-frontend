const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Process CSS files
      },
      {
        test: /\.scss$/, // Process SCSS/Sass files
        use: ['style-loader', 'css-loader', 'sass-loader'], // Loaders in order
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8081,  // Ensure this matches the port you're using
    historyApiFallback: true,  // To support React Router (for single-page apps)
    hot: true,  // Enable hot module replacement
    open: true,  // Automatically open browser on start
    allowedHosts: 'all'
  },
};