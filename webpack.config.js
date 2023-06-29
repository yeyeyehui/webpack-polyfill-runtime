// /front/html/1.3.webpack.polyfill.html
module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/index.js",
  output: {
    clean: true,
  },
  module: {
    rules: [
      // 不使用polyfill
      //   {
      //     test: /\.js?$/,
      //     exclude: /node_modules/,
      //     use: {
      //       loader: "babel-loader",
      //       options: {
      //         sourceType: "unambiguous", // Babel 会根据文件上下文推断使用esm语法还是common语法
      //         presets: [["@babel/preset-env", { useBuiltIns: false }]],
      //       },
      //     },
      //   },

      // 根据配置目标浏览器兼容使用polyfill
      //   {
      //     test: /\.js?$/,
      //     exclude: /node_modules/,
      //     use: {
      //       loader: "babel-loader",
      //       options: {
      //         sourceType: "unambiguous", // Babel 会根据文件上下文推断使用esm语法还是common语法
      //         presets: [["@babel/preset-env", { useBuiltIns: 'entry', corejs: 3 }]]
      //       },
      //     },
      //   },

      // 根据配置的浏览器兼容使用polyfill
      //   {
      //     test: /\.js?$/,
      //     exclude: /node_modules/,
      //     use: {
      //       loader: "babel-loader",
      //       options: {
      //         sourceType: "unambiguous", // Babel 会根据文件上下文推断使用esm语法还是common语法
      //         presets: [["@babel/preset-env", { useBuiltIns: 'usage', corejs: 3 }]]
      //       },
      //     },
      //   },

      // 使用babel-plugin-transform-runtime
      //   {
      //     test: /\.js?$/,
      //     exclude: /node_modules/,
      //     use: {
      //       loader: "babel-loader",
      //       options: {
      //         sourceType: "unambiguous", // Babel 会根据文件上下文推断使用esm语法还是common语法
      //         presets: [
      //           [
      //             "@babel/preset-env",
      //             { useBuiltIns: "usage", corejs: { version: 3 } },
      //           ],
      //         ],
      //         plugins: [
      //           [
      //             "@babel/plugin-transform-runtime",
      //             {
      //               corejs: 3, // 当我们使用 ES6 的静态事件或内置对象时自动引入 babel-runtime/core-js
      //               helpers: true, // 避免内联的 helper 代码在多个文件重复出现，使用babel-runtime/helpers 来替换
      //               regenerator: true, // 转换成使用regenerator runtime来避免污染全局域
      //             },
      //           ],
      //         ],
      //       },
      //     },
      //   },

      // 项目开发
      //   {
      //     test: /\.js$/,
      //     use: [
      //       {
      //         loader: "babel-loader",
      //         options: {
      //           targets: {
      //             browsers: [">0.1%"],
      //           },
      //           presets: [
      //             [
      //               "@babel/preset-env",
      //               {
      //                 useBuiltIns: "usage", //如果开发的是类库，不要使用污染全局环境的polyfill
      //                 corejs: 3,
      //               },
      //             ],
      //           ],
      //           plugins: [
      //             [
      //               "@babel/plugin-transform-runtime", // 解决多个文件重复引用 相同helpers
      //               {
      //                 corejs: false,
      //               },
      //             ],
      //           ],
      //         },
      //       },
      //     ],
      //   },

      //   类库开发
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              targets: {
                browsers: [">0.1%"],
              },
              presets: [["@babel/preset-env"]],
              plugins: [
                [
                  "@babel/plugin-transform-runtime",
                  {
                    corejs: {
                      version: 3,
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
};
