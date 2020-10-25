var config = {
  entry: "./main.js",
  output: {
    path: "/",
    filename: "index.js",
  },
  devServer: {
    inline: true,
    port: 8002,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
module.exports = config;
