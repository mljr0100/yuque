const path = require("path");
const { Configuration } = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const htmlWebpackPlugin = require("html-webpack-plugin");
/**
 * @type { Configuration } // 使用注解的方式，增加代码智能提示
 */
const config = {
  mode: "production",
  entry: "./src/main.ts",
  output: {
    filename: "buddle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // 解析 .vue 结尾的文件
        use: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.json",
          appendTsSuffixTo: [/\.vue$/],
        },
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".tsx", ".ts", "js", "vue"],
  },
};
module.exports = config;
