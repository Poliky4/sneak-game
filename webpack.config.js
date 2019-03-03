const path = require("path");

const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "game.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
