const path = require("path");

module.exports = {
  entry: "./src/index.js", // 打包文件的入口，webpack将从这个文件开始分析整个项目的依赖结构
  output: {
    filename: "main.js", // 输出的文件名称
    path: path.resolve(__dirname, "dist"), // 输出的文件夹
  },
};
